## 深拷贝数据

-----
### 方法名`deepCopy`
* 深层复制数据(递归调用实现，可复制互相引用或引用自身的对象)
* 只复制对象自身属性
* 深层复制包括：Array,Object,Arguments(复制为数组),Date,RegExp,String,Number,Boolean
* 其他类型直接返回该数据包括null，undefined，function，htmlElement(通过js获取到的html元素对象或者集合)
* 使用实例见`index.html`