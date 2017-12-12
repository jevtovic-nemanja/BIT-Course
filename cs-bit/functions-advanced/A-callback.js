// Write a callback function.


function multiplyByTwo(a,callback) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        var element = a[i]*2;
        result[i] = callback(element);    
    }
    return result;
}


function addOne(number){
    var result = number + 1;
    return result;
}


console.log(multiplyByTwo([2,6],addOne));