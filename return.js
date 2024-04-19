function fnAdd1(num1 ,  num2){                // Function Declaration  num1 & num2------------Function Parameter

    var a ;                        
    var b ;

    a= num1;
    b= num2;

    var result = a + b;

    return result

    //console.log("Addition is : ", +result)
}

var finalResult1 = fnAdd1(100,100)                          //Function Call----------Function Argument
console.log("Addition is : ", +finalResult1)

var finalResult2 =fnAdd1(50,50)
console.log("Addition is : ", +finalResult2)

var finalResult3 = fnAdd1(30,60)
console.log("Addition is : ", +finalResult3)