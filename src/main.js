const fs = require('fs');
const path = require('path');
const rd  = require('rd');

const lintPath = require('./lintPath.js');
const genDoc2md  = require('./jsdoc2Md.js');

module.exports = function () {


    function main(){
        // 同步遍历目录下的所有js文件
        rd.eachFileFilterSync('./src', /\.js$/, (f, s) => {
            //console.log('开始处理：【%s】' ,f);
            //lintPath(f);
            if(f.indexOf('component.js') > -1){
                genDoc2md(f);
            }
        });
    }

    main();
}

