#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { 
  CallToolRequestSchema, 
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema
} = require('@modelcontextprotocol/sdk/types.js');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Khởi tạo Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Tạo MCP server
const server = new Server(
  {
    name: process.env.MCP_SERVER_NAME || 'vatly11-database',
    version: process.env.MCP_SERVER_VERSION || '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// Định nghĩa các công cụ database
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'query_students',
        description: 'Truy vấn danh sách học sinh',
        inputSchema: {
          type: 'object',
          properties: {
            chapter: {
              type: 'number',
              description: 'Số chương (1-4)',
              minimum: 1,
              maximum: 4
            },
            limit: {
              type: 'number',
              description: 'Số lượng kết quả tối đa',
              default: 50
            }
          }
        }
      },
      {
        name: 'get_student_scores',
        description: 'Lấy điểm số của học sinh',
        inputSchema: {
          type: 'object',
          properties: {
            student_id: {
              type: 'string',
              description: 'ID của học sinh'
            },
            chapter: {
              type: 'number',
              description: 'Số chương (1-4)',
              minimum: 1,
              maximum: 4
            }
          },
          required: ['student_id']
        }
      },
      {
        name: 'add_student_score',
        description: 'Thêm điểm số cho học sinh',
        inputSchema: {
          type: 'object',
          properties: {
            student_id: {
              type: 'string',
              description: 'ID của học sinh'
            },
            chapter: {
              type: 'number',
              description: 'Số chương (1-4)',
              minimum: 1,
              maximum: 4
            },
            score: {
              type: 'number',
              description: 'Điểm số',
              minimum: 0
            },
            time_taken: {
              type: 'number',
              description: 'Thời gian làm bài (giây)'
            },
            correct_answers: {
              type: 'number',
              description: 'Số câu trả lời đúng'
            }
          },
          required: ['student_id', 'chapter', 'score']
        }
      },
      {
        name: 'auto_create_tables',
        description: 'Tự động tạo tất cả bảng dữ liệu cần thiết cho hệ thống trắc nghiệm',
        inputSchema: {
          type: 'object',
          properties: {
            force_recreate: {
              type: 'boolean',
              description: 'Có xóa và tạo lại bảng cũ không (cẩn thận khi dùng)',
              default: false
            }
          }
        }
      },
      {
        name: 'save_chapter4_formula_score',
        description: 'Lưu kết quả trắc nghiệm công thức chương 4',
        inputSchema: {
          type: 'object',
          properties: {
            student_id: {
              type: 'string',
              description: 'ID của học sinh'
            },
            formula_category: {
              type: 'string',
              description: 'Danh mục công thức (ví dụ: "dong_dien_khong_doi", "cam_ung_dien_tu")'
            },
            score: {
              type: 'number',
              description: 'Điểm số (0-100)'
            },
            correct_answers: {
              type: 'number',
              description: 'Số câu trả lời đúng'
            },
            total_questions: {
              type: 'number',
              description: 'Tổng số câu hỏi'
            },
            time_taken: {
              type: 'number',
              description: 'Thời gian làm bài (giây)'
            },
            difficulty_level: {
              type: 'string',
              description: 'Mức độ khó (easy, medium, hard)',
              default: 'medium'
            },
            answers: {
              type: 'object',
              description: 'Chi tiết câu trả lời JSON'
            }
          },
          required: ['student_id', 'formula_category', 'score', 'correct_answers', 'total_questions']
        }
      },
      {
        name: 'get_leaderboard',
        description: 'Lấy bảng xếp hạng',
        inputSchema: {
          type: 'object',
          properties: {
            chapter: {
              type: 'number',
              description: 'Số chương (1-4)',
              minimum: 1,
              maximum: 4
            },
            limit: {
              type: 'number',
              description: 'Số lượng kết quả tối đa',
              default: 10
            }
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
      case 'query_students':
        const { data: students, error: studentsError } = await supabase
          .from('students')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(args.limit || 50);
        
        if (studentsError) throw studentsError;
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(students, null, 2)
            }
          ]
        };

      case 'get_student_scores':
        const { data: scores, error: scoresError } = await supabase
          .from('student_scores')
          .select('*')
          .eq('student_id', args.student_id)
          .eq('chapter', args.chapter)
          .order('created_at', { ascending: false });
        
        if (scoresError) throw scoresError;
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(scores, null, 2)
            }
          ]
        };

      case 'add_student_score':
        const { data: newScore, error: addError } = await supabase
          .from('student_scores')
          .insert({
            student_id: args.student_id,
            chapter: args.chapter,
            score: args.score,
            time_taken: args.time_taken,
            correct_answers: args.correct_answers,
            created_at: new Date().toISOString()
          })
          .select();
        
        if (addError) throw addError;
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({ success: true, data: newScore }, null, 2)
            }
          ]
        };

      case 'auto_create_tables':
        const fs = require('fs');
        const path = require('path');
        
        try {
          const sqlScript = fs.readFileSync(
            path.join(__dirname, 'setup-database.sql'), 
            'utf8'
          );
          
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ 
                  success: true, 
                  message: 'Đã chuẩn bị script tạo bảng dữ liệu!',
                  sql_script: sqlScript,
                  instructions: [
                    '1. Mở Supabase Dashboard',
                    '2. Vào SQL Editor',
                    '3. Copy và paste toàn bộ script bên dưới',
                    '4. Click "Run" để thực thi',
                    '5. Script sẽ tự động tạo tất cả bảng cần thiết:',
                    '   - students: thông tin học sinh',
                    '   - quiz_results: kết quả trắc nghiệm chung',
                    '   - chapter4_formula_scores: kết quả trắc nghiệm công thức chương 4',
                    '   - leaderboard: bảng xếp hạng tự động cập nhật'
                  ]
                }, null, 2)
              }
            ]
          };
        } catch (error) {
          throw new Error(`Lỗi khi đọc script tạo bảng: ${error.message}`);
        }

      case 'save_chapter4_formula_score':
        const { data: formulaScore, error: formulaError } = await supabase
          .from('chapter4_formula_scores')
          .insert({
            student_id: args.student_id,
            formula_category: args.formula_category,
            score: args.score,
            correct_answers: args.correct_answers,
            total_questions: args.total_questions,
            time_taken: args.time_taken,
            difficulty_level: args.difficulty_level || 'medium',
            answers: args.answers,
            completed_at: new Date().toISOString()
          })
          .select();
        
        if (formulaError) throw formulaError;
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({ 
                success: true, 
                message: 'Đã lưu kết quả trắc nghiệm công thức chương 4!',
                data: formulaScore 
              }, null, 2)
            }
          ]
        };

      case 'get_leaderboard':
        const { data: leaderboard, error: leaderboardError } = await supabase
          .from('student_scores')
          .select(`
            *,
            students!inner(name, class_name)
          `)
          .eq('chapter', args.chapter)
          .order('score', { ascending: false })
          .limit(args.limit || 10);
        
        if (leaderboardError) throw leaderboardError;
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(leaderboard, null, 2)
            }
          ]
        };

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ error: error.message }, null, 2)
        }
      ],
      isError: true
    };
  }
});

// Định nghĩa resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'supabase://students',
        name: 'Danh sách học sinh',
        description: 'Toàn bộ danh sách học sinh trong hệ thống',
        mimeType: 'application/json'
      },
      {
        uri: 'supabase://scores',
        name: 'Điểm số học sinh',
        description: 'Tất cả điểm số của học sinh',
        mimeType: 'application/json'
      },
      {
        uri: 'supabase://leaderboard',
        name: 'Bảng xếp hạng',
        description: 'Bảng xếp hạng tổng hợp',
        mimeType: 'application/json'
      }
    ]
  };
});

// Đọc resources
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  try {
    switch (uri) {
      case 'supabase://students':
        const { data: allStudents, error: allStudentsError } = await supabase
          .from('students')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (allStudentsError) throw allStudentsError;
        
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(allStudents, null, 2)
            }
          ]
        };

      case 'supabase://scores':
        const { data: allScores, error: allScoresError } = await supabase
          .from('student_scores')
          .select(`
            *,
            students(name, class_name)
          `)
          .order('created_at', { ascending: false });
        
        if (allScoresError) throw allScoresError;
        
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(allScores, null, 2)
            }
          ]
        };

      case 'supabase://leaderboard':
        const { data: allLeaderboard, error: allLeaderboardError } = await supabase
          .from('student_scores')
          .select(`
            *,
            students!inner(name, class_name)
          `)
          .order('score', { ascending: false });
        
        if (allLeaderboardError) throw allLeaderboardError;
        
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(allLeaderboard, null, 2)
            }
          ]
        };

      default:
        throw new Error(`Unknown resource: ${uri}`);
    }
  } catch (error) {
    throw new Error(`Failed to read resource ${uri}: ${error.message}`);
  }
});

// Khởi động server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Database server for VatLy11 started successfully');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
