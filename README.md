脚本主要用于检测jsdoc中错误的文件路径注释，在检测完成后，会更正为正确的路径。

# 快速使用
1,安装edu-doc-lint

```
npm install edu-doc-lint -g
```
2,cd到需要检测组件根目录，默认修正src目录下的js文件
```
cd component-xx
edu-doc-lint
```

3，输出
```
开始处理：【/Users/rookiebob/edu-work/pool/component-calendar/src/datePicker/ui.js】
开始处理：【/Users/rookiebob/edu-work/pool/component-calendar/src/dateRangePicker/component.js】
>>该文件下被替换的错误路径： @class   module:pool/component-calendar/src/component/dateRangePicker/component.DateRangePicker
>>该文件下被替换的错误路径： @member {Number} module:pool/component-calendar/src/component/dateRangePicker/component.DateRangePicker#getGMTStartDate
>>该文件下被替换的错误路径： @member {Number} module:pool/component-calendar/src/component/dateRangePicker/component.DateRangePicker#getGMTEndDate
>>该文件下被替换的错误路径： @method  module:pool/component-calendar/src/component/dateRangePicker/component.DateRangePicker#config
>>该文件下被替换的错误路径： @method  module:pool/component-calendar/src/component/dateRangePicker/component.DateRangePicker#init
>>该文件下被替换的错误路径： @method  module:pool/component-calendar/src/component/dateRangePicker/component.DateRangePicker#doValidate
>>该文件下被替换的错误路径： @method  module:pool/component-calendar/src/component/dateRangePicker/component.DateRangePicker#destroy

```


