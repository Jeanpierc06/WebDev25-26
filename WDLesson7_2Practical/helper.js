// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Challenge 3: Create the function showMap() that displays the map for a location [lat, lon]
function showMap(lat,lon){
  let lat = get(lat).value;
  let lon = get(lon).value;
  
showMap(lat, lon)



}

// Challenge 4: Create the function card() to generate an appropriate info card with the button to view map
function card( info ){ 
  let build = `<div>
  <h3>${info.crash_date} </h3>
  <h3>${info.on_street_name} </h3>  
    <h3>${info.off_street_name} </h3>  
    <hr>
  <h3>${info.number_of_persons_injured} </h3>  
  <h3>${info.number_of_persons_killed} </h3>  
  <hr>
  <h3>${info.contributing_factor_vehicle_1} </h3>  
  <h3>${info.contributing_factor_vehicle_2} </h3>  
  <h3>${info.collision_id} </h3>

  if(info.latitude && info.longitude){
                    build += `<input type="button" value="Map" onclick="showMap( ${info.latitude}, ${info.longitude} )">`;
                  }
          </div>`
}