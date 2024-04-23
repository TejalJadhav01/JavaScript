var Employee = [
    {
        name : "Kajal",
        id : 101,
        Experience : 2,
    },
    {
        name : "Tejal",
        id : 102,
        Experience : 5,
    },
    {
        name : "Sejal",
        id : 103,
        Experience : 8,
    },
    {
        name : "priyanka",
        id : 104,
        Experience : 5,
    },
];

    function printDesignation(name, Experience){
        if(Experience >= 0 && Experience <= 2) {
            console.log(name, "Junior Developer");
        }else if(Experience >=3 && Experience <=5) {
            console.log(name,"Senior Developer");
        }else if(Experience >=6 && Experience <=8){
            console.log(name,"Team Lead");
        }else  if(Experience >=9 && Experience <=12){
            console.log(name,"Technical MAnager");
        }else if(Experience >= 13){
            console.log(name,"Software Architecture");
        }

    }

    printDesignation("Tejal",5)