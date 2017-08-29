var d = Date.now();
var n = 3000;
    function display(m) {
        console.log("Function Executing after "+ m +" seconds");
    }

function setTimeoutSync(display,n) {
    while (Date.now() < (d+n)){

    }
    display(n);
}


console.log("before function is called");
setTimeoutSync(display,n);
console.log("after function is executed");
