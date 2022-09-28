import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { footer } from "./components/navbar.js";

document.getElementById("footer").innerHTML = footer();

import { sidebar } from "./components/navbar.js";

document.getElementById('sidebar').innerHTML=sidebar();

import {newsSlider} from './components/navbar.js';

document.getElementById('news_slider').innerHTML=newsSlider();


let poster = [
'Three new credit card rules coming into effect from Oct.','Ankita Bhandari murder case to be tried in fast-track court; Uttarakhand CM announces Rs 25 lakh compensation for family','Gandhis still keen on Gehlot contesting party prez poll...','Amid F-16 strain, US talks of India-Pakistan dialogue','Centre bans PFI for 5 years under anti-terror law UAPA ...'
  ]
  
  let id;
  function Start() {

    let container = document.getElementById("breaking_news");

    let i = 0;
  
    let p = document.createElement("p");

    let id = setInterval(function () {
      if (i === 5) {
        i = 0;
      }
      p.innerText = poster[i];
      container.append(p);
      i++;
    }, 2000);
  }
  
  function Stop() {
     clearInterval(id)
  }
  Start()   