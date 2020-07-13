var queryString = (function () {
    var toString = Object.prototype.toString;

    function isArray(arr) {
        return toString.call(arr) === '[object Array]';
    }

    function isObject(obj) {
        return toString.call(obj) === '[object Object]';
    }

    var qs = {
        isArray: isArray,
        isObject: isObject,
        parse: function (str, ifDecodeURI) {
            var result = {};
            var queryStr = str === undefined ? '' : str;
            if (typeof queryStr == 'string' && queryStr.length) {
                if (queryStr[0] === '?') {
                    queryStr = queryStr.slice(1);
                }
                queryStr = queryStr.split('&');
                for (var i = 0; i < queryStr.length; i++) {
                    var item = queryStr[i];
                    if(!item.length){
                        continue;
                    }
                    var key, val, equalIndex = item.indexOf('=');
                    if (equalIndex >= 0) {
                        key = item.slice(0, equalIndex);
                        val = item.slice(equalIndex + 1);
                    } else {
                        key = item;
                        val = '';
                    }
                    key = ifDecodeURI ? decodeURIComponent(key) : key;
                    val = ifDecodeURI ? decodeURIComponent(val) : val;
                    if (result[key] === undefined) {
                        result[key] = val;
                    } else if (isArray(result[key])) {
                        result[key].push(val);
                    } else {
                        result[key] = [result[key], val];
                    }
                }
            }
            return result;
        },
        stringify: function (obj, ifEncodeURI) {
            var str = [];
            if (obj && isObject(obj)) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        var _key = ifEncodeURI ? encodeURIComponent(key) : key;
                        if (isArray(obj[key])) {
                            for (var i = 0; i < obj[key].length; i++) {
                                var _val = ifEncodeURI ? encodeURIComponent(obj[key][i]) : obj[key][i];
                                str.push([_key, _val].join('='))
                            }
                        } else {
                            var _val = ifEncodeURI ? encodeURIComponent(obj[key]) : obj[key];
                            str.push([_key, _val].join('='))
                        }
                    }
                }
            }
            return str.join('&');
        }
    };
    return qs;
})();
