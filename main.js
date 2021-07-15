const wechaty = require('wechaty');
const qr = require('qrcode-terminal');
const FileBox = require('file-box');
const schedule = require('node-schedule')

let ins = null;

ins = new wechaty.Wechaty({name: 'newsboy'});
const onScan = function (code) {
    qr.generate(code)
};

function onLogOut(user) {

}

function onFriendShip() {

}

function onMessage(msg) {
    if (msg.self())
        return
    console .log(msg.text())
}

function onRoomMessage() {

}

function onRoomInvitation() {

}

function onRoomTopic() {

}

function onErr() {

}

function onLogIn() {

}

ins.on('scan', onScan)
    .on('login', onLogIn)
    .on('logout', onLogOut)
    .on('friendship', onFriendShip)
    .on('message', onMessage)
    .on('room-message', onRoomMessage)
    .on('room-invitation', onRoomInvitation)
    .on('room-topic', onRoomTopic)
    .on('error', onErr);

ins.start()