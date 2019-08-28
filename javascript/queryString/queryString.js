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
        parse: function (str) {
            var result = {};
            var queryStr = str === undefined ? (window ? window.location.search : '') : str;
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
                    key = decodeURIComponent(key);
                    val = decodeURIComponent(val);
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
        stringify: function (obj) {
            var str = [];
            if (obj && isObject(obj)) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (isArray(obj[key])) {
                            for (var i = 0; i < obj[key].length; i++) {
                                str.push([encodeURIComponent(key), encodeURIComponent(obj[key][i])].join('='))
                            }
                        } else {
                            str.push([encodeURIComponent(key), encodeURIComponent(obj[key])].join('='))
                        }
                    }
                }
            }
            return str.join('&');
        }
    };
    return qs;
})();
