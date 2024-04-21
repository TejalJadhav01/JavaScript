var makeup = [
    {
        pName : "Eyelinear",
        Brand : "Nyka",
        Price : 300
    },
    {
        pName : "Lipstick",
        Brand : "Nyka",
        Price : 400
    },
    {
        pName : "Foundation",
        Brand : "Apple",
        Price : 450  
    },
    {
        pName : "EyeShadow",
        Brand : "Apple",
        Price : 600
    }]

    var FilteredArray = makeup.filter( function (e, i){
        return e.Brand == "Apple" && e.Price > 450
        
    })

    
    // console.log(AppleFiltered)

    console.log("FilteredArray : ", FilteredArray)