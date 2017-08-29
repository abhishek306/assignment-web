function square(item){
    return item * item;
}

function foreach(arr,func) {
     var i=0;

    while (i < arr.length){
        console.log(func(arr[i]));
        i++;
    }
}

function myMap(arr,func) {
    var map_arr = [];
    var i = 0;

    while (i < arr.length){
        var sq = func(arr[i]);
        map_arr[i] = sq;
        i++;
    }
    return map_arr;
}

var arr = [1,2,3];
var res = myMap(arr,square);
foreach(arr,square);
console.log(res);