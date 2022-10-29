var add = function (a, b, str, print) {
    if (print)
        console.log(str + (a + b));
    else
        console.log(a + b);
};
var a = 1;
var b = 2;
add(a, b, 'result is ', true);
