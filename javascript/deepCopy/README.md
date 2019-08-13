## 深拷贝数据

-----
### 方法名`deepCopy`
* 深层复制数据(递归调用实现，可复制互相引用或引用自身的对象)
* 数组和对象会深层复制，其他种类数据都是直接赋值，包括null，undefined，function，regExp，date，htmlElement(通过js获取到的html元素对象或者集合)
* 使用实例见`index.html`