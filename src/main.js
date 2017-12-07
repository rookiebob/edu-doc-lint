const fs = require('fs');
const path = require('path');
const lintPath = require('./lintPath.js');
const rd  = require('rd');

module.exports = function () {


    function main(){
        // 同步遍历目录下的所有js文件
        rd.eachFileFilterSync('./src', /\.js$/, function (f, s) {
            console.log('开始处理：【%s】' ,f);
            lintPath(f);
        });
    }

    main();
}

