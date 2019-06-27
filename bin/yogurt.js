#!/usr/bin/env node
// 引入依赖
var program = require('commander');
 
// 定义版本和参数选项
program
  .version('0.1.0', '-v, --version')
 
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
  console.log('    我爱喝酸奶！');
  console.log('');
});
 
program.parse(process.argv);
 