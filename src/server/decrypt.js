const { spawn } = require('child_process');
const path = require('path');

const pythonScriptPath = path.join('D:\\chatmsg\\src\\server\\decrypt.py');
const pythonScriptPath1 = path.join('D:\\chatmsg\\src\\server\\get_bias_addr.py');
const pythonScriptPath2 = path.join('D:\\chatmsg\\src\\server\\get_wx_info.py');

const versionListPath = path.join('D:\\chatmsg\\src\\server\\version_list.json');

const processes = [];

function executeScript(scriptPath, versionListAbsolutePath) {
    // 根据需要调整参数的传递方式
    let args = [];
    if (scriptPath === pythonScriptPath2) {
        args = ['--vlfile', versionListAbsolutePath];
    } else {
        args = [versionListAbsolutePath];
    }
    const process = spawn('python', [scriptPath,...args]);
    processes.push(process);
    process.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    process.stderr.on('data', function (data) {
        console.error('Error from child process:', data.toString());
    });
    return process;
}

function checkAllProcessesClosed() {
    let allClosed = true;
    for (const process of processes) {
        if (!process.killed) {
            allClosed = false;
            break;
        }
    }
    if (allClosed) {
        console.log('All child processes exited.');
    }
}

async function runScriptsSequentially() {
    try {
        const process1 = executeScript(pythonScriptPath, versionListPath);
        await new Promise((resolve) => process1.on('close', resolve));
        const process2 = executeScript(pythonScriptPath1, versionListPath);
        await new Promise((resolve) => process2.on('close', resolve));
        const process3 = executeScript(pythonScriptPath2, versionListPath);
        await new Promise((resolve) => process3.on('close', resolve));
        checkAllProcessesClosed();
    } catch (error) {
        console.error('An error occurred during script execution:', error);
    }
}

runScriptsSequentially();