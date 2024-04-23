function createUI(){
    console.log("hello")
    var ulRef = document.createElement("ul");

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    li1.innerText = "Iphone 14"
    li2.innerText = "Iphone 13"
    li3.innerText = "Iphone 12"
    li4.innerText = "Iphone 11"



    ulRef.appendChild(li1);
    ulRef.appendChild(li2);
    ulRef.appendChild(li3);
    ulRef.appendChild(li4);


    document.getElementById("root").appendChild(ulRef)


}