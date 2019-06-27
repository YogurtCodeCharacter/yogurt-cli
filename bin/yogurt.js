#!/usr/bin/env node
// 引入依赖
const program = require('commander');
const pkg = require('../package.json');
 
// 定义版本和参数选项
program
  .version(pkg.version, '-v, --version')
 
program
  .command('init')
  .description('初始化脚手架模板')
  .action((cmd) => {
    require('../lib/init')(cmd);
  })
  program
  .command('list')
  .description('查看模板列表')
  .action((cmd) => {
    require('../lib/templateList')(cmd);
  })

program.on('--help', function(){
  console.log('');
  console.log('    酸奶码字员');
  console.log('');
});
 
program.parse(process.argv);
 