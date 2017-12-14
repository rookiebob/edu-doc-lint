/**
 * Created by rookiebob on 2017/12/11.
 */


const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const rootPath = process.cwd();


const genDoc =  (filepath) => {
    jsdoc2md.render({ files: filepath }).then((f) => {
        extractApis(f);
        extractEvents(f);
    })
};

//过滤拿出component.js的数据api
const extractApis = (filePath) => {
    const reg = /####\snew.*\n+(.*\s+\n(\|.*\n)+)\n/i;
    console.log(reg.test(filePath));
    const apiString = RegExp.$1;
    fs.appendFile(rootPath + '/README.md' , apiString , (err) => {
        if (err) throw err;
        console.log(filePath  + 'apis append success!');
    })
};

//过滤拿出component.js的event
const extractEvents = (filePath) => {
    const reg = /(###.*\n+\*\*Kind\*\*:\sevent.*(.*[\n\r\s])+)/i;
    console.log(reg.test(filePath));
    const eventString = RegExp.$1;
    console.log(eventString);
    fs.appendFile(rootPath + '/README.md' , eventString , (err) => {
        if(err) throw err;
        console.log(filePath  + 'events append success!')
    })
};

module.exports = genDoc;
