let results = document.getElementById("results");

const getData = async () => {

    try{
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=10eb02d414a64a8a9f7708853cd80fc8`)

        let data = await res.json()
        console.log(data);
        appendData(data)
        // https://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY
        // 10eb02d414a64a8a9f7708853cd80fc8
    }
    catch(e){
        console.log(e);
    }
}
getData();


function appendData(data){
    results.innerHTML=null
     
    data.articles.forEach(ele => {
        let div=document.createElement("div")
        let h1=document.createElement('p')
        h1.innerHTML=ele.title
        let img=document.createElement("img")
        img.src=ele.urlToImage


        div.append(img,h1)
        results.append(div)
    });

}