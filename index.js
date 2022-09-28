import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { footer } from "./components/navbar.js";

document.getElementById("footer").innerHTML = footer();

import { sidebar } from "./components/navbar.js";

document.getElementById('sidebar').innerHTML=sidebar();

let poster = [
'Three new credit card rules coming into effect from Oct.','SC in action: Fourth five-judge Constitution bench to h...','Gandhis still keen on Gehlot contesting party prez poll...','Amid F-16 strain, US talks of India-Pakistan dialogue','Centre bans PFI for 5 years under anti-terror law UAPA ...'
  ]
  // console.log(poster)
  // localStorage.setItem('images',poster)
  
  let id;
  function Start() {
    // let poster =JSON.parse(localStorage.getItem("images"))
    let container = document.getElementById("slider");
    // container.innerHTML = null;
    let i = 0;
  
    let p = document.createElement("h1");
    // img.src = poster[0];
    let id = setInterval(function () {
      if (i === 5) {
        i = 0;
      }
      p.innerText = poster[i];
      container.append(p);
      i++;
    }, 3000);
  }
  
  function Stop() {
     clearInterval(id)
  }
  Start()   