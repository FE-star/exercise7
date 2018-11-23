module.exports = function (str) {
    return str.match(/(?:^x|\sx)=(\d+)(?:\s|$)/) ? str.match(/(?:^x|\sx)=(\d+)(?:\s|$)/)[1] : null;
}