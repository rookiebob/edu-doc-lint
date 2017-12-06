const fs = require('fs');

function getRightFilePath(filePath){
    const reg = /(pool.*)\..*/ig;
    reg.test(filePath);
    console.log(RegExp.$1);
    return RegExp.$1;
}

function lintPath(filePath){
    const fileContent = fs.readFileSync(filePath , 'utf8');
    const reg = /(@(method|member).*module:)(pool.*)(\..*)/ig;
    const _rightFilePath = getRightFilePath(filePath);
    const res = fileContent.replace(reg,function(word , $1 , $2 ,$3 , $4){
        console.log("被替换的注释路径有：" , $1 , $2 , $3 , $4);
        if($1 && $2 && $3 && $4){
            return $1 + _rightFilePath + $4;
        }
    });

    fs.writeFileSync(filePath,res,'utf8',function(){
        console.log('file rewrite success',filePath);
    })


};


module.exports = lintPath;