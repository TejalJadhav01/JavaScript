var User1 = {
    name : "tejal",
    email : "tejal123@gmail.com",
    id : 101,
    address : {
         dist : "sangli",
         city : "vita",
         pin : 415311
    }

}

console.log(User1)

console.log(User1.address)
console.log(User1.address.dist)

// Insert Property
User1.address.state = "maharashtra"
console.log(User1)

// Update Property


User1.address.pin = 111222
console.log(User1.address)


//delete property

delete User1.email
delete User1.address.state
console.log(User1)