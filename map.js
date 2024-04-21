var arr = [10,20,30,40]  //[100,2000,300,400]

var NewArray = arr.map(function(ele , i){

    // var num = 10;
    var result = ele * 10;
    return result;
})

console.log(NewArray);