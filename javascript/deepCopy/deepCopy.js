function deepCopy(data) {
    var toString = Object.prototype.toString;
    var valueType = {
        object: '[object Object]',
        array: '[object Array]',
        arguments: '[object Arguments]',
        date: '[object Date]',
        regExp: '[object RegExp]',
        string: '[object String]',
        number: '[object Number]',
        boolean: '[object Boolean]'
    }
    var visitObjs = [];
    var copyVisitObjs = [];
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
    }
    function copy(_data) {
        var Ctor = _data.constructor;
        var type = toString.call(_data);
        var obj;
        switch (type) {
            case valueType.object:
                obj = {};
                break;
            case valueType.array:
            case valueType.arguments:
                obj = [];
                break;
            case valueType.regExp:
                return cloneRegExp(_data);
            case valueType.date:
            case valueType.boolean:
                return new Ctor(+_data);
            case valueType.number:
            case valueType.string:
                return new Ctor(_data);
            default:
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