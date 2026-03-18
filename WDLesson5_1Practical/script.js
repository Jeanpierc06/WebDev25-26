/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/
function Finaleamount(){
    let output = document.getElementById("output");
    let P = parseFloat(document.getElementById("P").value;)
    let N = parseInt(document.getElementById("N").value;)
     let R = parseFloat(document.getElementById("R").value;)
     let T = parseInt(document.getElementById("T").value;)
let build = ""

     for let t=0; T<= year; t +=1){

        let A = P*(1+R/N)**(N*T);
        build += Year ${T}; $${A.toFixed(2)}<br>
        output.innerHTML = build;
     }
     
        
}