
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e1d001bb4e184ec5b1cabd0da5447752



import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import {newsSlider} from './components/navbar.js';

document.getElementById('news_slider').innerHTML=newsSlider();

import { sidebar } from "./components/navbar.js";

document.getElementById('sidebar').innerHTML=sidebar();

import {rightSidebar} from './components/navbar.js';

document.getElementById('right_sidebar').innerHTML=rightSidebar();




import { footer } from "./components/navbar.js";

document.getElementById("footer").innerHTML = footer();


let query = document.getElementById("query");
query.disabled = true;
let searchbtn = document.getElementById("SearchButton");
searchbtn.disabled = true;
searchbtn.style.backgroundColor = "#ffde2f";
searchbtn.style.border = "none";
searchbtn.innerText = "";

// Adding some style and enabling the button and search input
document.querySelector("#searchNews").addEventListener("click", () => {
  query.disabled = false;
  query.style.backgroundColor = "White";
  query.placeholder = "Search News Here";
  query.style.padding = "15px";
  document.getElementById("SearchButton").style.padding = "12px";
  document.querySelector("#searchNews").disabled = true;
  searchbtn.innerText = "Search";
  searchbtn.disabled = false;
  searchbtn.style.border = "black";
  searchbtn.style.cursor = "pointer";
});

// adding event to search button to fetch the data from api
// let Search = document.getElementById("SearchButton");
// Search.addEventListener("load", () => {
//   SearchNews();
// });

window.onload=function(){
  SearchNews();
}

// fetching data from api but works only for two keyWords "tesla" and "twitter"
async function   SearchNews() {
  let query = JSON.parse(localStorage.getItem("query"))

  try {
    let res = await fetch(`https://masai-api.herokuapp.com/news?q=${query}`);
    let data = await res.json();
    console.log(data.articles);
    displayData(data.articles);
  } catch (error) {
    console.log(error);
  }
};

// Showing Fetch data to container div you can append data to your respective div
const displayData = (data) => {
    let container = document.getElementById("indian-news")
    container.innerHTML=null;
  data.forEach((ele) => {
   

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.urlToImage;

    let title = document.createElement("h4");
    title.innerText = ele.title;

    div.append(image, title);
    container.append(div);
  });
};


let poster = [
    'Three new credit card rules coming into effect from Oct.',
    'Ankita Bhandari murder case to be tried in fast-track court; Uttarakhand CM announces Rs 25 lakh compensation for family',
    'Gandhis still keen on Gehlot contesting party prez poll...',
    'Amid F-16 strain, US talks of India-Pakistan dialogue',
    'Centre bans PFI for 5 years under anti-terror law UAPA ...'
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


const arr = [
    {
       url:'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/28/2542170-stations-tb-ani.jpg',
       title:'Centre gives sneak peek at Indian Railway Stations of the...' 
    },
    {
        url:'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/17/2539410-pm1.jpg',
        title:'PM Narendra Modis Birthday: 5 schemes launched by Prime Mini...' 
     },
     {
        url:'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/16/2539086-2532577-leopard.jpg',
        title:'Fascinating facts about all 8 big cats...' 
     },
     {
        url:'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/14/2538609-chenab-bridge.jpg',
        title:'Chenab Bridge: Indian Railways shares stunning pictures of the...'
     },
     {
        url:'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/17/2539361-cheetah.jpg',
        title:'In Pics: PM Modi releases 8 cheetahs from Namibia at Kuno Na...'
     }
]



const slideShow = () => {
    let count = 0;
    let div = document.getElementById("1");
    
    let img = document.createElement("img");
    img.src = arr[0].url;

    let p=document.createElement("p");
    p.innerText=arr[0].title;
   
    div.append(img,p);
    count = count + 1;

    setInterval(function () {
        if (count == 4) {
            count = 0
        }
        img.src = arr[count].url;
        p.innerText=arr[count].title
        count++;
        div.append(img,p)
    }, 4000)

}


slideShow();

const slideShow2 = () => {
    let count = 1;
    let div = document.getElementById("2");
    
    let img = document.createElement("img");
    img.src = arr[1].url;

    let p=document.createElement("p");
    p.innerText=arr[1].title;
    div.append(img,p);
   

    
    count = count + 1;

    setInterval(function () {
        if (count == 5) {
            count = 1
        }
        img.src = arr[count].url;
        p.innerText=arr[count].title
        count++;
        div.append(img,p)
    }, 4000)

}
slideShow2()

// https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=e1d001bb4e184ec5b1cabd0da5447752

let getData = async () => {

    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=e1d001bb4e184ec5b1cabd0da5447752`)
                    
    let data = await res.json();
    let actual_data = data.articles;
    console.log('data', actual_data)
    append(actual_data)
}
getData();

const append =  (result) => {
    let container=document.getElementById("indian-news");

    result.forEach(el => {
       if(el.urlToImage!==null){
        let div = document.createElement("div");
        
       

        let img=document.createElement("img");
        img.src=el.urlToImage;

        let p = document.createElement("p")
        p.innerText=el.title;

        // let data ={
        //     id:el.url
        // }

        div.addEventListener("click", function () {
            Click(el);
        });

        div.append(img,p)
        container.append(div)
       }
       
    })

   

}

 function Click(el){
  
   localStorage.setItem("india",JSON.stringify(el));
   console.log(el)
   window.location.href="./details.html";

 }