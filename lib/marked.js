// @@ --> <blink>
// *  --> <em>
// __ --> <strong>

module.exports = function (str) {

    var reg = /((@@|\*+|__)(.*?)\2)/g;
    while (reg.test(str)) {
        str = str.replace(reg, function () {
            var node = '';
            switch (arguments[2]) {
                case '@@':
                    node = 'blink';
                    break;
                case '*':
                    node = 'em';
                    break;
                case '__':
                case '**':
                    node = 'strong';
                    break;
                default:
                    break;
            }
            return '<' + node + '>'+ (arguments[3] || '') +'</' + node + '>';
        });
    }
    
    return '<p>' + str + '</p>'
  }
