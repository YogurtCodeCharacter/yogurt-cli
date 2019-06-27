// const execa = require('execa');
const chalk = require('chalk');
const download = require('download-git-repo');
const ora = require('ora');
const path = require('path');
const log = console.log;

module.exports = (cmd) => {
    const spinner = ora('Loading...').start();
    // execa.stdout('git', ['clone', 'https://github.com/YogurtCodeCharacter/templateOne.git']);
    download('YogurtCodeCharacter/templateOne', path.resolve(), { clone: false }, (error) => {
        if (error) {
            log(chalk.red(`下载模板失败,请确认网络是否正常`));
            console.error(error);
            process.exit(1);
        } else {
            spinner.stop();
            log(chalk.yellow('恭喜，模板载入成功！'));
        }
    })
}