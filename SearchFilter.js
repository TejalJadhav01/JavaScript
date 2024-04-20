var products = [
    { 
    pName :"Iphone 13",
    Bname : "Apple",
    price : 70000
},
{
    pName :"vivo 13",
    Bname : "Avivo",
    price : 35000
},
{
    pName :"Samgsung",
    Bname : "galaxy13",
    price : 40000
},
{
    pName :"oneplus",
    Bname : "Y20",
    price : 50000
}]

var filtered = products.filter(function(e){
    return e.price <= 50000;
})

console.log(filtered)