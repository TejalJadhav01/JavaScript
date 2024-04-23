var Even = [100, 56,  89, 34, 78, 56, 77]

function PrintEven(){
    
    Even.forEach(function(ele , index){
        if(ele % 2 != 0){
            console.log( "Even no. is : ",ele)
        }
    });
}

PrintEven()

// Write a code for to find the odd numbers

var Odd = [45,67,90, 56, 47, 23, 90, 56, 11 ,97]

function Odd(){
 Odd.forEach(function(ele, index){
    if(ele % 2 != 0){
        console.log("Odd no.", ele)
    }
})
}

Odd()











