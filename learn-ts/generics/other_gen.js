var countAndDesc = function (a) {
    var desc = "Non";
    if (a.length) {
        desc = 'Got ' + a.length;
    }
    return [a, desc];
};
console.log(countAndDesc("hello there"));
