
-----
### 方法名`escapeHtml`
* 转译html字符串，防止XSS攻击。防止在使用innerHTML时出现问题
* 参数1：html字符串
* 参数2：Boolean,是否让回车替换成\<br\/\>,空格替换成&nbsp;从而显示出多空格和换行效果
* 使用实例见`index.html`