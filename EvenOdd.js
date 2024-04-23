var Number = [44, 45, 67, 90, 87,  56, 47, 23, 90, 56, 11 , 97]

function EvenOdd(){
 Number.forEach(function(ele, index){
    if( ele % 2 == 0){
        console.log("Even no. :", ele)
    }
    else
    {
        console.log("odd no. : ", ele)
    }
})
}

EvenOdd();
