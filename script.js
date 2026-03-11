const track=document.querySelector(".carousel-track");

let position=0;

document.querySelector(".next").onclick=()=>{

position-=300;

track.style.transform=`translateX(${position}px)`;

};

document.querySelector(".prev").onclick=()=>{

position+=300;

track.style.transform=`translateX(${position}px)`;

};
