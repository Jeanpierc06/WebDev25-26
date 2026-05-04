let data, info; //global variables

async function init(){
  // Challenge 1: Retrieve the FBI data from https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

 for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <br>
                 <h3>${crash.crash_time}</h3>
                 <hr>
                 <p>${crash.on_street_name}</p>
                 <p>${crash.off_street_name}</p>
                 <p>${crash.number_of_persons_injured}</p>
                 <p>${crash.number_of_persons_killed}</p>
                 <hr>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <br>
                 <p>${crash.contributing_factor_vehicle_2}</p>
                 <hr>
                 <p>${crash.collision_id}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <br> 
                 <p>${crash.vehicle_type_code2}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByStreet(){
  let output = document.getElementById("output");
  let street = document.getElementById("street").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.on_street_name == street){
      build += `<div class="fitted card">
                    <h3>${crash.crash_date}</h3>
                 <br>
                 <h3>${crash.crash_time}</h3>
                 <hr>
                 <p>${crash.on_street_name}</p>
                 <p>${crash.off_street_name}</p>
                 <p>${crash.number_of_persons_injured}</p>
                 <p>${crash.number_of_persons_killed}</p>
                 <hr>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <br>
                 <p>${crash.contributing_factor_vehicle_2}</p>
                 <hr>
                 <p>${crash.collision_id}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <br> 
                 <p>${crash.vehicle_type_code2}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

/* search by number of injured people */

function filterByInjury(){
  let output = document.getElementById("output");
  let injury = document.getElementById("injury").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.number_of_persons_injured == injury){
      build += `<div class="fitted card">
                    <h3>${crash.crash_date}</h3>
                 <br>
                 <h3>${crash.crash_time}</h3>
                 <hr>
                 <p>${crash.on_street_name}</p>
                 <p>${crash.off_street_name}</p>
                 <p>${crash.number_of_persons_injured}</p>
                 <p>${crash.number_of_persons_killed}</p>
                 <hr>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <br>
                 <p>${crash.contributing_factor_vehicle_2}</p>
                 <hr>
                 <p>${crash.collision_id}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <br> 
                 <p>${crash.vehicle_type_code2}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

/* search by number of injured people */

function filterByCrashid(){
  let output = document.getElementById("output");
  let crashid = document.getElementById("crashid").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.collision_id == crashid){
      build += `<div class="fitted card">
                    <h3>${crash.crash_date}</h3>
                 <br>
                 <h3>${crash.crash_time}</h3>
                 <hr>
                 <p>${crash.on_street_name}</p>
                 <p>${crash.off_street_name}</p>
                 <p>${crash.number_of_persons_injured}</p>
                 <p>${crash.number_of_persons_killed}</p>
                 <hr>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <br>
                 <p>${crash.contributing_factor_vehicle_2}</p>
                 <hr>
                 <p>${crash.collision_id}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <br> 
                 <p>${crash.vehicle_type_code2}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
