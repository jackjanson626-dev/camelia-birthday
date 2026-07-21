const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {

    document.getElementById("main").scrollIntoView({
        behavior: "smooth"
    });

});

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(3+Math.random()*4)+"s";

    heart.style.fontSize=(15+Math.random()*35)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createHeart,250);

const startDate=new Date("2026-04-02T00:00:00");

const counter=document.getElementById("counter");

function updateCounter(){

const now=new Date();

const diff=now-startDate;

if(diff<0){

counter.innerHTML="Our Love Story Starts on April 2nd, 2026 ❤️";

return;

}

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/60000);

const seconds=Math.floor((diff%(1000*60))/1000);

counter.innerHTML=
`❤️ Together for <br><br>
<b>${days}</b> Days 💖
<b>${hours}</b> Hours 💖
<b>${minutes}</b> Minutes 💖
<b>${seconds}</b> Seconds`;

}

setInterval(updateCounter,1000);

updateCounter();
