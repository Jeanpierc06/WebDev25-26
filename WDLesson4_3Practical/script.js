/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

function BMI(){
       let weight = parseInt(document.getElementById("weight").value;)
       let height = parseInt(document.getElementById("height").value;)
       let output = parseInt(document.getElementById("output").value;)

       let message = ""
       let output = Math.pow(weight / height)

}

       if (weight > 18.5 && < 24.9){
              let message = "healthy" 
               filename = "healthyweight.png"
       }
       if (weight < 18.5){
              let message = "underweight"
              filename = "underweight.png"
       }

       if (weight > 30){

              let message = "obese"
              filename = "obeseweight.png"
       }

       if (weight > 25 && < 29.99){
              let message = "overweight"
              filename = "overweight.png"
       }