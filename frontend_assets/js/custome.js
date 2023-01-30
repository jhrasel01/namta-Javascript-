let input   = document.querySelector("input");
let button  = document.querySelector("button");


button.addEventListener("click", function (){

    for(i = 1; i <= 10; i++) {
        document.write( input.value + " x " + i +  " = " + input.value * i + " </br> " )
    } 

})
