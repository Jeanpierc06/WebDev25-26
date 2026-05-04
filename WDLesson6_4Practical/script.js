let data, info; //global variables

async function init(){
  // Challenge 1: Retrieve the FBI data from https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";
  /* Challenge 2: 
          1) Traverse the data using a 'for' loop.  
          2) Create a variable to extract each criminal's information from the dataset.
          3) Using the variable created, generate HTML to display the information for each criminal.

     Note: To view the PDF of the criminal poster include the following code before the string interpolated url
     into a hyperlink in order to actually display the PDF in a new tab.
     https://mozilla.github.io/pdf.js/web/viewer.html?file=${...}
  */
for(let i=0; data.length; i++){
  `<div class="card">
<a href= ${data.link[i]}>
<h3> ${data[i].sex} </h3>
<h3> ${data[i].details} </h3>
<h3> ${data[i].title} </h3>
<a href="${data[i].pdf}>
<img src ${data[i].image}>
  </div>`

}
  output.innerHTML = build;
}

