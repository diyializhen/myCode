var timeFormat=(function () {
    var bind=Function.prototype.bind;
    var defaultInvalidDate = 'Invalid date';
    var defaultFormat='YYYY-MM-DD hh:mm:ss';
    function isDate(dateObject){
        return dateObject instanceof Date || Object.prototype.toString.call(dateObject) === '[object Date]';
    };
    function isValidDate(dateObject){
        return isDate(dateObject) && !isNaN(dateObject.valueOf())
    };
    function formatNumber(n){
        n = n.toString();
        return n[1] ? n : '0' + n;
    };
    function setDefaultFormat(str) {
        defaultFormat=str;
    }

    function tf() {
        var timeArgs=Array.prototype.slice.call(arguments);

        function getTime(){
            return isValidDate(this._date) ? this._date.getTime() : defaultInvalidDate;
        }
        function format(formatString){
            var _this=this;
            if(!isValidDate(this._date)){
                return defaultInvalidDate;
            }
            var _formatStr=formatString || this.defaultFormat;
            return _formatStr.replace(/(YY|M|D|h|m|s){1,2}/g,function(word){
                return _this[word];
            })
        }
        function Moment() {
            var args=Array.prototype.slice.call(arguments);
            var dateObj=null;
            if(args.length==1 && isDate(args[0])){
                dateObj=args[0];
            }else if(args.length<1){
                dateObj=new Date();
            }else{
                var _args=args.slice();
                if(_args.length==1 && Object.prototype.toString.call(_args[0]) === '[object String]' && _args[0].indexOf('T') === -1){
                    _args[0]=_args[0].replace(/-/g,'/');
                }
                dateObj=new ( bind.apply( Date, [null].concat(_args) ) )();
            }
            this._date=dateObj;
            this._isValid=isValidDate(dateObj);
            this._args=args;
            this.defaultFormat=defaultFormat;
            var year=String(dateObj.getFullYear());
            var month=String(dateObj.getMonth()+1);
            var day=String(dateObj.getDate());
            var hours=String(dateObj.getHours());
            var minutes=String(dateObj.getMinutes());
            var seconds=String(dateObj.getSeconds());
            this['YYYY']=year;
            this['YY']=year.slice(2);
            this['MM']=formatNumber(month);
            this['M']=month;
            this['DD']=formatNumber(day);
            this['D']=day;
            this['hh']=formatNumber(hours);
            this['h']=hours;
            this['mm']=formatNumber(minutes);
            this['m']=minutes;
            this['ss']=formatNumber(seconds);
            this['s']=seconds;
        }
        var proto=Moment.prototype;
        proto.getTime=getTime;
        proto.format=format;

        return new ( bind.apply(Moment,[null].concat(timeArgs)) )();
    }
    tf.isDate=isDate;
    tf.isValidDate=isValidDate;
    tf.formatNumber=formatNumber;
    tf.setDefaultFormat=setDefaultFormat;
    return tf;
})();
