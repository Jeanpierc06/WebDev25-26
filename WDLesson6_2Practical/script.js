function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");
  let build = " "

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
for (let i = 0; i = school.length; i ++){
  let build += `<div class="card"> 
          <h3> ${name[i]} </h3>
          <a href="${image[i]}"></a>
          <h3> ${adress[i]}</h3>
                </div>`
                
build.innerHTML=school
}
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"the big stein",
    "image":"",
    "album":"kiujy",
    "url":""
  };
  let output = document.getElementById("output");


  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.

for (let i = 0; artist.length; i ++){
  output += <div class="card" >
                  <h3> ${name[i]} </h3>
                  <img src="">
                  <h3> ${album[i]} </h3>
                  <a href="">
                  
  
  </div>
  }
}


