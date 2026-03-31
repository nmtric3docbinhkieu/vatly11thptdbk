#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { 
  CallToolRequestSchema, 
  ListToolsRequestSchema
} = require('@modelcontextprotocol/sdk/types.js');
const { createClient } = require('@supabase/supabase-js');

// Hardcode config để không cần đọc .env
const SUPABASE_URL = 'https://bxffaxcimeturttxqrme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZmZheGNpbWV0dXJ0dHhxcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MDk1MzQsImV4cCI6MjA4NTk4NTUzNH0.uU3H707Qjfd2X4iQN3K9KKhsvNZkYn8v8zB_5lthzr0';

// Khởi tạo Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Tạo MCP server
const server = new Server(
  {
    name: 'vatly11-database-fast',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Định nghĩa các công cụ
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'create_tables',
        description: 'Tạo bảng dữ liệu trắc nghiệm công thức chương 4',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'save_score',
        description: 'Lưu kết quả học sinh',
        inputSchema: {
          type: 'object',
          properties: {
            student_name: { type: 'string' },
            class_name: { type: 'string' },
            formula_category: { type: 'string' },
            score: { type: 'number' },
            correct_answers: { type: 'number' },
            total_questions: { type: 'number' }
          },
          required: ['student_name', 'formula_category', 'score', 'correct_answers', 'total_questions']
        }
      },
      {
        name: 'get_leaderboard',
        description: 'Xem bảng xếp hạng',
        inputSchema: {
          type: 'object',
          properties: {
            limit: { type: 'number', default: 10 }
          }
        }
      }
    ]
  };
});

// Xử lý các công cụ
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'create_tables':
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              message: '✅ Sẵn sàng tạo bảng dữ liệu!',
              sql: `-- Chạy script này trong Supabase Dashboard:
CREATE TABLE IF NOT EXISTS chapter4_formula_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id),
  formula_category VARCHAR(100),
  score DECIMAL(5,2),
  correct_answers INTEGER,
  total_questions INTEGER,
  time_taken INTEGER,
  completed_at TIMESTAMP DEFAULT NOW()
);`
            })
          }]
        };

      case 'save_score':
        const { data: student } = await supabase
          .from('students')
          .select('id')
          .eq('name', args.student_name)
          .single();
        
        let studentId = student?.id;
        
        if (!studentId) {
          const { data: newStudent } = await supabase
            .from('students')
            .insert({ name: args.student_name, class_name: args.class_name })
            .select()
            .single();
          studentId = newStudent.id;
        }

        const { data: result } = await supabase
          .from('chapter4_formula_scores')
          .insert({
            student_id: studentId,
            formula_category: args.formula_category,
            score: args.score,
            correct_answers: args.correct_answers,
            total_questions: args.total_questions
          })
          .select();

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              message: '✅ Đã lưu kết quả!',
              data: result
            })
          }]
        };

      case 'get_leaderboard':
        const { data: leaderboard } = await supabase
          .from('chapter4_formula_scores')
          .select(`
            *,
            students!inner(name, class_name)
          `)
          .order('score', { ascending: false })
          .limit(args.limit || 10);

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              message: '🏆 Bảng xếp hạng',
              data: leaderboard
            })
          }]
        };

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({ error: error.message })
      }],
      isError: true
    };
  }
});

// Khởi động server nhanh
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('🚀 MCP Fast Server started - Ready for VatLy11!');
}

main().catch(console.error);
