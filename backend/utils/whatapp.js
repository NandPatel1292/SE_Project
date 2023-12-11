const qrcode = require('qrcode-terminal');

const { MessageMedia, Client } = require('whatsapp-web.js');

const media = MessageMedia.fromFilePath('/Users/admin/Desktop/billpe.pdf');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

const number = "+919662977934";
const chatId = number.substring(1) + "@c.us";

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage(chatId, media);

});

client.initialize();