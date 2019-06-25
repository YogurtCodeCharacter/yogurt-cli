
const userHome = require('user-home');
const fs = require('fs');
const execa = require('execa');
const download = require('download');

module.exports = (cmd) => {
    execa.stdout('git', ['clone', 'https://github.com/YogurtCodeCharacter/yogurt.git']);
    console.log('下载成功');
}