const execa = require('execa');
const chalk = require('chalk');

module.exports = (cmd) => {
    execa.stdout('git', ['clone', 'https://github.com/YogurtCodeCharacter/yogurt.git']);
    console.log(chalk.yellow('恭喜，载入成功！'));
}