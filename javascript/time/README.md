## 时间格式转换方法

-----
### 方法名`timeFormat`
+ 参数：
    + 第一种与js中原生Date对象相同参数，如：
    ```javascript    
        timeFormat() //不传参数为当前时间    
        timeFormat(milliseconds)
        timeFormat(dateString)
        timeFormat(year, month, day, hours, minutes, seconds, milliseconds)
    ```
    + 第二种是直接传入时间对象，如：
    ```javascript
        timeFormat(new Date())
    ```
+ 返回值：  
    + 调用该方法返回一个实例化对象
    ```javascript
    //包含以下属性
    //两个字母时当数字只有一位则前面加个0，一个字母则不加
        {
            YYYY:'',//年份
            YY:'',//年份后两位
            MM:'',//月
            M:'',
            DD:'',//日
            D:'',
            hh:'',//时
            h:'',
            mm:'',//分
            m:'',
            ss:'',//秒
            s:'',
            defaultFormat:'YYYY-MM-DD hh:mm:ss',//使用format方法时默认的格式
            _args:[],//此方法传入的参数
            _isValid:true,//参数是否合法
            _date:{},//此方法得到的时间对象
        }
    ```
+ 返回对象包含的方法  
     
    + 1、`format`  
    该方法参数为要转换的字符串，默认为YYYY-MM-DD hh:mm:ss   
    年份：YYYY 年份后两位:YY    
    		月：MM  日：DD  时：hh 分：mm  秒：ss （两个字母时如果为个位数第一位自动补上0）   
    		M,D,h,m,s 只有一个字母时则不会补0 
    > 备注：此方法为对传入的字符串通过正则替换对应的字母并返回该字符串，
     		所以字符串参数不要传入不想替换成时间的这些字母，会被替换掉。  	
     		
    例：
    ```javascript
        console.log(timeFormat(2019,0,8))
        console.log(timeFormat('2019-06-14T00:00:00'))
        console.log(timeFormat().format())
        console.log(timeFormat('2019-06-14').format())
        console.log(timeFormat('2019/06/14 08:08:08').format('YY-MM-DD hh:mm:ss'))
        console.log(timeFormat('2019-06-14ff').format())//非法参数,则返回'Invalid date'
        console.log(timeFormat('2019-06-14').format('今天日期是YYYY/MM/DD'))
        console.log(timeFormat('2019-08-08').format('今天日期是YY年M月D日'))
    ```     
    
     + 2、`getTime`    
    获取`timeFormat`方法传入时间对应的时间戳
    
    例：
    ```javascript
        console.log(timeFormat().getTime())
    ```
    
### `timeFormat`包含的方法    
* isDate    
    * 参数为对象，返回该对象是否为Date对象（boolean）
* isValidDate
    * 参数为Date对象，返回该Date对象是否是一个合法的时间 （boolean）
* formatNumber
    * 参数为Number或者String的数字，返回字符串，如果只有一位则前面加0，否则不变   
    
例：
```javascript
    console.log(timeFormat.isDate(new Date())) //true
    console.log(timeFormat.isValidDate(new Date('08/08/08dd'))) //false
    console.log(timeFormat.formatNumber(1)) //01
```