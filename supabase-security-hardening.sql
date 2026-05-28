-- ==========================================
-- SUPABASE SECURITY HARDENING - VATLY11
-- Chay trong Supabase SQL Editor
-- Muc tieu:
-- 1) Bat RLS cho toan bo bang public
-- 2) Xoa policy qua mo duoc tao truoc day
-- 3) Tao policy an toan toi thieu cho cac bang app dang su dung
-- ==========================================

BEGIN;

-- 1) Bat RLS + FORCE RLS cho tat ca bang trong schema public
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN
    SELECT tablename
    FROM pg_tables
    WHERE schemaname = 'public'
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', r.tablename);
    EXECUTE format('ALTER TABLE public.%I FORCE ROW LEVEL SECURITY;', r.tablename);
  END LOOP;
END $$;

-- 2) Xoa cac policy qua mo pho bien
DO $$
DECLARE
  p RECORD;
BEGIN
  FOR p IN
    SELECT schemaname, tablename, policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND (
        policyname ILIKE '%allow all%'
        OR policyname ILIKE '%cho phep tat ca%'
        OR policyname ILIKE '%admins can view all%'
        OR policyname ILIKE '%admins can update%'
        OR policyname ILIKE 'users can insert their own%'
        OR policyname ILIKE 'users can view their own%'
        OR policyname ILIKE 'everyone can view%'
      )
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I;', p.policyname, p.schemaname, p.tablename);
  END LOOP;
END $$;

-- 2.1) Xoa policy cuc ky nguy hiem: role public + quyen ALL
DO $$
DECLARE
  p RECORD;
BEGIN
  FOR p IN
    SELECT schemaname, tablename, policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND cmd = 'ALL'
      AND 'public' = ANY(roles)
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I;', p.policyname, p.schemaname, p.tablename);
  END LOOP;
END $$;

-- 3) Tao policy co dieu kien ton tai bang
DO $$
BEGIN
  IF to_regclass('public.students') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "students_select_approved" ON public.students;';
    EXECUTE 'CREATE POLICY "students_select_approved" ON public.students FOR SELECT TO anon, authenticated USING (is_approved = true);';

    EXECUTE 'DROP POLICY IF EXISTS "students_insert_registration" ON public.students;';
    EXECUTE 'CREATE POLICY "students_insert_registration" ON public.students FOR INSERT TO anon, authenticated WITH CHECK (coalesce(length(trim(full_name)), 0) >= 3 AND coalesce(length(trim(class_name)), 0) >= 1);';
  END IF;

  IF to_regclass('public.quiz_attempts_chapter3_quiz') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "quiz_insert_public" ON public.quiz_attempts_chapter3_quiz;';
    EXECUTE 'CREATE POLICY "quiz_insert_public" ON public.quiz_attempts_chapter3_quiz FOR INSERT TO anon, authenticated WITH CHECK (student_id IS NOT NULL AND score >= 0);';
    EXECUTE 'DROP POLICY IF EXISTS "quiz_read_public" ON public.quiz_attempts_chapter3_quiz;';
    EXECUTE 'CREATE POLICY "quiz_read_public" ON public.quiz_attempts_chapter3_quiz FOR SELECT TO anon, authenticated USING (true);';
  END IF;

  IF to_regclass('public.quiz_attempts_chapter3_solve') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "solve_insert_public" ON public.quiz_attempts_chapter3_solve;';
    EXECUTE 'CREATE POLICY "solve_insert_public" ON public.quiz_attempts_chapter3_solve FOR INSERT TO anon, authenticated WITH CHECK (student_id IS NOT NULL AND score >= 0);';
    EXECUTE 'DROP POLICY IF EXISTS "solve_read_public" ON public.quiz_attempts_chapter3_solve;';
    EXECUTE 'CREATE POLICY "solve_read_public" ON public.quiz_attempts_chapter3_solve FOR SELECT TO anon, authenticated USING (true);';
  END IF;

  IF to_regclass('public.quiz_attempts_chapter3_ktghk2') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "ktghk2_insert_public" ON public.quiz_attempts_chapter3_ktghk2;';
    EXECUTE 'CREATE POLICY "ktghk2_insert_public" ON public.quiz_attempts_chapter3_ktghk2 FOR INSERT TO anon, authenticated WITH CHECK (student_id IS NOT NULL AND score >= 0);';
    EXECUTE 'DROP POLICY IF EXISTS "ktghk2_read_public" ON public.quiz_attempts_chapter3_ktghk2;';
    EXECUTE 'CREATE POLICY "ktghk2_read_public" ON public.quiz_attempts_chapter3_ktghk2 FOR SELECT TO anon, authenticated USING (true);';
  END IF;

  IF to_regclass('public.exercise_attempts_chapter3') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "exercise_insert_public" ON public.exercise_attempts_chapter3;';
    EXECUTE 'CREATE POLICY "exercise_insert_public" ON public.exercise_attempts_chapter3 FOR INSERT TO anon, authenticated WITH CHECK (student_id IS NOT NULL AND score >= 0);';
    EXECUTE 'DROP POLICY IF EXISTS "exercise_read_public" ON public.exercise_attempts_chapter3;';
    EXECUTE 'CREATE POLICY "exercise_read_public" ON public.exercise_attempts_chapter3 FOR SELECT TO anon, authenticated USING (true);';
  END IF;

  IF to_regclass('public.quiz_attempts_chapter4_formula') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "formula_insert_public" ON public.quiz_attempts_chapter4_formula;';
    EXECUTE 'CREATE POLICY "formula_insert_public" ON public.quiz_attempts_chapter4_formula FOR INSERT TO anon, authenticated WITH CHECK (student_id IS NOT NULL AND score >= 0);';
    EXECUTE 'DROP POLICY IF EXISTS "formula_read_public" ON public.quiz_attempts_chapter4_formula;';
    EXECUTE 'CREATE POLICY "formula_read_public" ON public.quiz_attempts_chapter4_formula FOR SELECT TO anon, authenticated USING (true);';
  END IF;

  IF to_regclass('public.chapter4_formula_scores') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "formula_scores_insert_public" ON public.chapter4_formula_scores;';
    EXECUTE 'CREATE POLICY "formula_scores_insert_public" ON public.chapter4_formula_scores FOR INSERT TO anon, authenticated WITH CHECK (student_id IS NOT NULL AND score >= 0);';
    EXECUTE 'DROP POLICY IF EXISTS "formula_scores_read_public" ON public.chapter4_formula_scores;';
    EXECUTE 'CREATE POLICY "formula_scores_read_public" ON public.chapter4_formula_scores FOR SELECT TO anon, authenticated USING (true);';
  END IF;

  IF to_regclass('public.leaderboard') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "leaderboard_read_public" ON public.leaderboard;';
    EXECUTE 'CREATE POLICY "leaderboard_read_public" ON public.leaderboard FOR SELECT TO anon, authenticated USING (true);';
  END IF;
END $$;

-- 5) Bao ve bo sung: tranh lo password_hash cho role anon/authenticated
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'students'
      AND column_name = 'password_hash'
  ) THEN
    EXECUTE 'REVOKE SELECT (password_hash) ON public.students FROM anon, authenticated;';
  END IF;
END $$;

COMMIT;

-- 6) Kiem tra nhanh
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;

SELECT tablename, policyname, cmd, roles
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
