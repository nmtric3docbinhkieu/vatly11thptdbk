# Supabase Emergency Fix (May 2026)

Muc tieu:
- Sua canh bao Critical: rls_disabled_in_public
- Giam nguy co Supabase bi tam dung khi website nghi he

## 1) Chay script hardening RLS

1. Mo Supabase Dashboard > SQL Editor.
2. Chay toan bo file supabase-security-hardening.sql.
3. Kiem tra ket qua o 2 truy van cuoi script:
   - Tat ca bang public phai co rowsecurity = true.
   - Da co policies cho cac bang chinh.

## 2) Neu can setup lai bang

Dung cac file da sua:
- setup-database.sql
- create-chapter4-table.sql
- create-chapter4-formula-table.sql
- create-chapter4-quiz-table.sql

Luu y: cac file nay da bo cu phap SQL khong hop le (CREATE POLICY IF NOT EXISTS, CREATE TRIGGER IF NOT EXISTS).

## 3) Bat keep-alive tren Vercel

Du an da them:
- API ping: api/ping-supabase.js
- Cron schedule: vercel.json (moi 6 gio)

Can cau hinh ENV trong Vercel:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- CRON_SECRET (khuyen nghi)

Neu dung CRON_SECRET, goi thu cong:
- /api/ping-supabase?secret=<CRON_SECRET>

## 4) Kiem tra sau khi deploy

1. Deploy len Vercel.
2. Mo endpoint /api/ping-supabase de dam bao tra ve ok:true.
3. Vao Supabase Advisor, xac nhan canh bao rls_disabled_in_public da bien mat.

## 5) Gioi han hien tai can biet

He thong hien tai dang dung client-side anon key cho ca hoc sinh va admin, nen khong the phan quyen admin that su an toan chi bang RLS + mat khau o frontend.

De an toan hon truoc nam hoc moi:
- Chuyen thao tac admin (duyet hoc sinh, xuat full du lieu) sang server route dung service role key.
- Frontend chi goi API server cho chuc nang admin.
