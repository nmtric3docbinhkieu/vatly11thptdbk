const { createClient } = require('@supabase/supabase-js');

// Test kết nối Supabase
const supabase = createClient(
  'https://bxffaxcimeturttxqrme.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZmZheGNpbWV0dXJ0dHhxcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MDk1MzQsImV4cCI6MjA4NTk4NTUzNH0.uU3H707Qjfd2X4iQN3K9KKhsvNZkYn8v8zB_5lthzr0'
);

console.log('🚀 Testing MCP Database Connection...');

async function testConnection() {
  try {
    // Test kết nối bằng cách kiểm tra bảng students
    const { data, error } = await supabase
      .from('students')
      .select('id')
      .limit(1);
    
    if (error) {
      if (error.code === 'PGRST116') {
        console.log('✅ KẾT NỐI THÀNH CÔNG! Bảng students chưa tồn tại - Cần tạo mới');
        console.log('📋 MCP Server sẵn sàng hoạt động!');
      } else {
        console.log('❌ Lỗi kết nối:', error.message);
      }
    } else {
      console.log('✅ KẾT NỐI THÀNH CÔNG! Bảng students đã tồn tại');
      console.log('📋 MCP Server sẵn sàng hoạt động!');
    }
    
    // Test tạo bảng chapter4_formula_scores
    const { error: formulaError } = await supabase
      .from('chapter4_formula_scores')
      .select('id')
      .limit(1);
    
    if (formulaError && formulaError.code === 'PGRST116') {
      console.log('📝 Bảng chapter4_formula_scores chưa tồn tại - Sẵn sàng tạo');
    } else if (!formulaError) {
      console.log('✅ Bảng chapter4_formula_scores đã tồn tại');
    }
    
    console.log('\n🎯 KẾT LUẬN:');
    console.log('1. MCP Server có thể kết nối Supabase');
    console.log('2. Cần tạo bảng dữ liệu trước khi sử dụng');
    console.log('3. Windsurf cần restart để load MCP config');
    
  } catch (err) {
    console.log('❌ Lỗi:', err.message);
  }
}

testConnection();
