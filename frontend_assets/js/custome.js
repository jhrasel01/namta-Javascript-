let input   = document.querySelector("input");

let button  = document.querySelector("button");


button.addEventListener("click", function (){

    for(i=1; i<=10; i++){

        document.write(i + " x " + input.value + " = " + input.value*i + '</br>')

    }

})

/*

2*1 = 2
2*2 = 4

*/
