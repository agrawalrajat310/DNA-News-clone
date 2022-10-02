// e1d001bb4e184ec5b1cabd0da5447752

import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { newsSlider } from "./components/navbar.js";

document.getElementById("news_slider").innerHTML = newsSlider();

import { sidebar } from "./components/navbar.js";

document.getElementById("sidebar").innerHTML = sidebar();

import { rightSidebar } from "./components/navbar.js";

document.getElementById("right_sidebar").innerHTML = rightSidebar();

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
let Search = document.getElementById("SearchButton");
Search.addEventListener("click", () => {
  SearchNews();
});

// fetching data from api but works only for two keyWords "tesla" and "twitter"
const SearchNews = async () => {
  let query = document.getElementById("query").value;

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
  data.forEach((ele) => {
    let container = document.getElementById("details");

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
  "Three new credit card rules coming into effect from Oct.",
  "Ankita Bhandari murder case to be tried in fast-track court; Uttarakhand CM announces Rs 25 lakh compensation for family",
  "Gandhis still keen on Gehlot contesting party prez poll...",
  "Amid F-16 strain, US talks of India-Pakistan dialogue",
  "Centre bans PFI for 5 years under anti-terror law UAPA ...",
];

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
  clearInterval(id);
}
Start();

const arr = [
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/06/2536435-edu-main.jpg",
    title: "From NTA NEET UG 2022 Result to CBSE Compartment Result 2022...",
    id: 1,
  },

  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/05/2536104-teach.jpg",
    title:
      "Teacher's day: 5 teachers who transformed education scenario in India",
    id: 2,
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/08/2537096-neet-result.jpg",
    title: "Here are 5 courses Biology students can opt for after Class...",
    id: 3,
  },
  {
    url: " https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/08/24/2532826-nirish-rajput-tb.jpg",
    title: "Meet IAS officer Nirish Rajput, who sold newspapers, studied...",
    id: 4,
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/08/21/2531871-students-4-1.jpg",
    title: "Are you a college student? These 5 part-time...",
    id: 5,
  },
];

const slideShow = () => {
  let count = 0;
  let div = document.getElementById("1");

  let img = document.createElement("img");
  img.src = arr[0].url;

  let p = document.createElement("p");
  p.innerText = arr[0].title;

  div.onclick = function () {
    window.location.href = "./photo.html";
  };

  div.append(img, p);
  count = count + 1;

  setInterval(function () {
    if (count == 4) {
      count = 0;
    }
    img.src = arr[count].url;
    p.innerText = arr[count].title;
    count++;
    div.append(img, p);
  }, 4000);
};

slideShow();

const slideShow2 = () => {
  let count = 1;
  let div = document.getElementById("2");

  let img = document.createElement("img");
  img.src = arr[1].url;

  let p = document.createElement("p");
  p.innerText = arr[1].title;
  div.append(img, p);

  count = count + 1;

  setInterval(function () {
    if (count == 5) {
      count = 1;
    }
    img.src = arr[count].url;
    p.innerText = arr[count].title;
    count++;
    div.append(img, p);
  }, 4000);
};
slideShow2();

const videos = [
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/20/2540227-20thumbnail1801486.jpeg",
    title:
      "Delhi University Entrance Test (DUET) to be held in second week of October, watch for more details",
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/13/2538333-13thumbnail1801314.jpeg",
    title:
      "DU Admissions 2022 starts via CUET: Know DU’s new admission process",
    link: "https://www.dnaindia.com/india/video-dna-russia-announces-absorption-of-4-occupied-ukrainian-regions-2989384",
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/10/2537437-10thumbnail1801266.jpg",
    title:
      "DNA | What is IAMC? Know how its spreading propaganda against India",
    link: "https://www.dnaindia.com/india/video-dna-what-is-iamc-know-how-its-spreading-propaganda-against-india-2989382",
  },
];

const slideShow3 = () => {
  let count = 0;
  let div = document.getElementById("3");

  let img = document.createElement("img");
  img.src = videos[0].url;

  let p = document.createElement("p");
  p.innerText = videos[0].title;

  div.append(img, p);
  count = count + 1;

  setInterval(function () {
    if (count == 1) {
      count = 0;
    }
    img.src = videos[count].url;
    p.innerText = videos[count].title;
    count++;
    div.append(img, p);
  }, 4000);
};

slideShow3();

const slideShow4 = () => {
  let count = 1;
  let div = document.getElementById("4");

  let img = document.createElement("img");
  img.src = videos[1].url;

  let p = document.createElement("p");
  p.innerText = videos[1].title;
  div.append(img, p);

  count = count + 1;

  setInterval(function () {
    if (count == 2) {
      count = 1;
    }
    img.src = videos[count].url;
    p.innerText = videos[count].title;
    count++;
    div.append(img, p);
  }, 4000);
};
slideShow4();
