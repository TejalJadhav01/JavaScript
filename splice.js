var arr = [10,20,30,40,50,60]

// var value = arr.splice(1,2,60,70)


var value = arr.splice(1,2)
arr.push(80,90)
arr.pop(90)

arr.splice(2,1,"tejal")

console.log(arr)

console.log(value)
console.log(arr)