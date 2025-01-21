let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i =0; i <6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
}

let intervalStop;

const startChangingColor = function(){
   if(!intervalStop){
    intervalStop = setInterval(changeBgColor,1000)
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
   } 
}

const stopChangingColor = function(){
    clearInterval(intervalStop,document.body.style.backgroundColor = "white")
    intervalStop = null;
}

start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);