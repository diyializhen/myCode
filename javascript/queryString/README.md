
-----
### 方法名`queryString`
* 获取和转换queryString

* 包含方法：
    * `parse`由queryString获取对象数据，参数为`string`，若不传则获取`window.location.search`。方法会对key和value做`decodeURIComponent`解码。
    ```javascript
    var str='?a=1&b=2&b=1&=3&c=&';
    console.log(queryString.parse(str));
    /*结果
    *{
    *    a:'1',
    *    b:['2','1'],
    *    '':'3',
    *    c:''
    * }
     */
    ```     
    * `stringify`将对象转化为queryString，参数为`object`（必须为普通对象，否则返回空字符串），方法会对key和value做`encodeURIComponent`转码。
    ```javascript
    var obj={
        a:1,
        b:[1,2],
        c:'c'
    }
    console.log(queryString.stringify(obj));
    /*
    * 结果：
    * 'a=1&b=1&b=2&c=c'
    * */
    ```
    * `isArray`判断数据是否为数组，参数为数据，返回布尔值
    * `isObject`判断数据是否为普通对象（使用了`Object.prototype.tostring`方法，判断是否为`'[object Object]'`），参数为数据，返回布尔值