function isJson(str) {
    var toString=Object.prototype.toString;
    if (toString.call(str) === "[object String]") {
        try {
            var obj=JSON.parse(str);
            if(toString.call(obj) === "[object Object]"){
                return true;
            }else{
                return false;
            }
        } catch(e) {
            return false;
        }
    }else{
        return false;
    }
}