var products = {
    id : 101,
    pname : "Iphone14" , 
    price : 30000 
}

// Access the value property
console.log(products)

// Specific Object
console.log(products.id)
console.log(products.pname)

// Insert New Property

products.bname = "Apple";
products.rating = 4.5;

console.log(products)


// Updated  property values

products.price=50000
products.pname="Iphone 14 pro max"

console.log(products)


// delete the property

delete products.price
delete products.bname

console.log(products)
