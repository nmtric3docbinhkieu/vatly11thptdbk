@echo off
echo 🚀 Khởi động MCP Database Server cho VatLy11...
echo.

SET SUPABASE_URL=https://bxffaxcimeturttxqrme.supabase.co
SET SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZmZheGNpbWV0dXJ0dHhxcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MDk1MzQsImV4cCI6MjA4NTk4NTUzNH0.uU3H707Qjfd2X4iQN3K9KKhsvNZkYn8v8zB_5lthzr0
SET MCP_SERVER_NAME=vatly11-database
SET MCP_SERVER_VERSION=1.0.0

echo 📡 Kết nối đến Supabase: %SUPABASE_URL%
echo 🗄️  Database: VatLy11 - Trắc nghiệm công thức chương 4
echo.

node mcp-server.js

echo.
echo ❌ MCP Server đã dừng
pause
