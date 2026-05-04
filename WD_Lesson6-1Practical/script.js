/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [19, 27, 20, 24 ];
let meat_titles = ["Beef tips", "Brisket", "Rib eye", "Steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "shrimp.jpg"];
let seafood_prices = [20, 17, 25, 15];
let seafood_titles = ["Clams", "Crabs", "Lobster", "shrimp"];

let dessert_images = ["flan.jpg", "oreocup.jpg", "passionberry.jpeg", "scallops.jpg"];
let dessert_prices = [10, 6, 4, 5];
let dessert_titles = ["Flan", "Oreo cup", "passion berry", "scallops"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

    for (let index = 0; index < meat_images.length; index++) {
    build += `<div class="card">
      <h3>${meat_titles[index]}</h3>
      <img class="food" src="images/${meat_images[index]}">
      <h4>$${meat_prices[index]}</h4>
    </div>`;
  }
  m.innerHTML = build;
  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 

  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
build = "";
  for (let index = 0; index < seafood_images.length; index++) {
    build += `<div class="card">
      <h3>${seafood_titles[index]}</h3>
      <img class="food" src="images/${seafood_images[index]}">
      <h4>$${seafood_prices[index]}</h4>
    </div>`;
  }
  s.innerHTML = build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
build = "";
  for (let index = 0; index < dessert_images.length; index++) {
    build += `<div class="card">
      <h3>${dessert_titles[index]}</h3>
      <img class="food" src="images/${dessert_images[index]}">
      <h4>$${dessert_prices[index]}</h4>
    </div>`;
  }
  d.innerHTML = build;
}
