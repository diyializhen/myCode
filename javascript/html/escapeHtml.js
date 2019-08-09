function escapeHtml(htmlString, ifFormat) {
    var reg = ifFormat ? /\s|\n|(\r\n)|\<|\>|\/|\"|\'|\&/g : /[\<\>\/\"\'\&]/g;
    return htmlString.replace(reg, function (match) {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '/':
                return '&#x2F;';
            case '\"':
                return '&quot;';
            case '\'':
                return '&#x27;';
            case '\&':
                return '&amp;';
            case ' ':
                return '&nbsp;';
            case '\n':
                return '<br/>';
            default:
                return match;
        }
    })
}