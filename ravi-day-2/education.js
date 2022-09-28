// e1d001bb4e184ec5b1cabd0da5447752

 const arr = [
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/06/2536435-edu-main.jpg",
        title:"From NTA NEET UG 2022 Result to CBSE Compartment Result 2022...",
        id:1,
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/05/2536104-teach.jpg",
        title:"Teacher's day: 5 teachers who transformed education scenario in India",
        id:2,
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/08/2537096-neet-result.jpg",
        title:"Here are 5 courses Biology students can opt for after Class...",
        id:3,
    },
    {
        img:" https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/08/24/2532826-nirish-rajput-tb.jpg",
        title:"Meet IAS officer Nirish Rajput, who sold newspapers, studied...",
        id:4,
    },
 ]

 const slideShow = () =>{
    let count=0;
    let div=document.getElementById("sliding");
    let img=document.createElement("img");
    img.src=arr[0].img;
    div.append(img);
    count=count+1;

    setInterval(function(){
        if(count==3){
            count=0
        }
        img.src=arr[count];
        count++;
        div.append(img)
    },2000)
    
 }
  slideShow();
