
-----
### 方法名`queryString`
* 获取和转换queryString

* 包含方法：
    * `parse`由queryString获取对象数据，参数1为`string`，参数2为`Boolean`是否对key和value做`decodeURIComponent`解码，默认false。
    ```javascript
    var str='?a=1&b=2&b=1&=3&c=&';
    console.log(queryString.parse(str,true));
    /*结果
    *{
    *    a:'1',
    *    b:['2','1'],
    *    '':'3',
    *    c:''
    * }
     */
    ```     
    * `stringify`将对象转化为queryString，参数1为`object`，参数2为`Boolean`是否对key和value做`encodeURIComponent`转码，默认false。
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