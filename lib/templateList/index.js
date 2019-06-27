
const chalk = require('chalk');
const inquirer = require('inquirer');
const log = console.log;
const stringOne = 'react + antd + redux + saga + reactRouter + webpack';
const stringTwo = 'react + antd + mobox+ reactRouter + webpack';

module.exports = (cmd) => {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'list',
                name: 'theme',
                message: 'Select the template you need ？',
                choices: [
                    `${chalk.yellow(stringOne)}`,
                    `${chalk.yellow(stringTwo)}`
                ]
            }
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            if (answers.theme == chalk.yellow(stringOne)) {
                require('../init')(cmd);
            } else {
                log(chalk.red('暂不支持, 请等待后续开发提供...'));
            }
        });
}