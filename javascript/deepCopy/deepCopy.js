function deepCopy(data) {
    var toString = Object.prototype.toString;
    var visitObjs = [];
    var copyVisitObjs = [];

    function copy(_data) {
        var type = toString.call(_data);
        var obj;
        if (type == '[object Object]') {
            obj = {};
        } else if (type == '[object Array]') {
            obj = [];
        } else {
            return _data;
        }
        visitObjs.push(_data);
        copyVisitObjs.push(obj);
        for (var key in _data) {
            if (_data.hasOwnProperty(key)) {
                var _value = _data[key];
                if (_value && typeof _value == 'object') {
                    var index = visitObjs.indexOf(_value);
                    if (index >= 0) {
                        obj[key] = copyVisitObjs[index];
                    } else {
                        obj[key] = copy(_value);
                    }
                } else {
                    obj[key] = _value;
                }
            }
        }
        return obj;
    }

    return copy(data);
}