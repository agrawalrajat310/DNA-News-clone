
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e1d001bb4e184ec5b1cabd0da5447752









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
    }, 2000)

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
    }, 2000)

}
slideShow2()



let getData = async () => {

    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e1d001bb4e184ec5b1cabd0da5447752`)

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
        
        div.addEventListener("click", function () {
            Click();
        });

        let img=document.createElement("img");
        img.src=el.urlToImage;

        let p = document.createElement("p")
        p.innerText=el.title;


        div.append(img,p)
        container.append(div)
       }
       
    })

   

}