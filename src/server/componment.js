const { spawn } = require('child_process');
const path = require('path');

const bubbleMessagePath = path.join('D:\\chatmsg\\src\\componment\\bubble_message.py');
const buttonContactPath = path.join('D:\\chatmsg\\src\\componment\\Button_Contact.py');
const calendarDialogPath = path.join('D:\\chatmsg\\src\\componment\\calendar_dialog.py');
const cAvatarPath = path.join('D:\\chatmsg\\src\\componment\\CAvatar.py');
const contactInfoUiPath = path.join('D:\\chatmsg\\src\\componment\\contact_info_ui.py');
const exportContactItemPath = path.join('D:\\chatmsg\\src\\componment\\export_contact_item.py');
const promptBarPath = path.join('D:\\chatmsg\\src\\componment\\prompt_bar.py');
const qCursorGifPath = path.join('D:\\chatmsg\\src\\componment\\QCursorGif.py');
const scrollBarPath = path.join('D:\\chatmsg\\src\\componment\\scroll_bar.py');

// 执行 bubble_message.py
const bubbleMessageProcess = spawn('python', [bubbleMessagePath]);

bubbleMessageProcess.stdout.on('data', (data) => {
    console.log(`bubble_message.py output: ${data}`);
});

bubbleMessageProcess.stderr.on('data', (data) => {
    console.error(`bubble_message.py error: ${data}`);
});

bubbleMessageProcess.on('close', (code) => {
    console.log(`bubble_message.py process exited with code ${code}`);
});

// 可以类似地执行其他 Python 脚本