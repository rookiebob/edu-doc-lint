const fs = require('fs');

function getRightFilePath(filePath){
    const reg = /((component-|cache-|module-).*)\..*/ig;
    reg.test(filePath);
    //console.log(RegExp.$1);
    return RegExp.$1;
}

function lintPath(filePath){
    const fileContent = fs.readFileSync(filePath , 'utf8');
    const reg = /(@(method|member|module|class).*module:pool\/)(.*)(\..*)/ig;
    const _rightFilePath = getRightFilePath(filePath);
    const res = fileContent.replace(reg,function(word , $1 , $2 ,$3 , $4){
        //console.log('--%s----%s' , $3 , _rightFilePath);
        if($3 != _rightFilePath){
            console.log(">>该文件下被替换的错误路径：" ,word);
        }
        if($1 && $2 && $3 && $4){
            return $1 + _rightFilePath + $4;
        }
    });

    fs.writeFileSync(filePath,res,'utf8',function(){
        console.log('file rewrite success',filePath);
    })


};


module.exports = lintPath;