const { spawn } = require('child_process');
const path = require('path');

// 确保路径的正确性和可移植性
const pythonScriptPath = path.join(__dirname, '..', 'analyse', 'analysis.py');

// 使用 spawn 调用 Python 脚本的示例
const pythonProcess = spawn('python', [pythonScriptPath]);

pythonProcess.stdout.on('data', (data) => {
  console.log(`Python script output: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`Python script error: ${data}`);
});

pythonProcess.on('close', (code) => {
  console.log(`Python script exited with code ${code}`);
});