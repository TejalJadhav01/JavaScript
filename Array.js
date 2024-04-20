var Arr = [101,"Tejal Jadhav", true , {city : "sangli"}]
console.log(Arr[0])

console.log(typeof(Arr))


var array = ["Iphone" , "Samgsung" , "oneplus" , "Vivo",100,true]

console.log(array.length)


// Insert Elements in the last position

array.push("tejal")
console.log(array)

// Insert Elements in the First position

array.unshift(10001)
console.log(array)

// Remove Elements in the last Position

var removedElements = array.pop()
console.log(array)
console.log(removedElements)


var removedElements = array.shift()
console.log(array)
console.log(removedElements)