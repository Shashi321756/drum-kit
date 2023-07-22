var n= document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var btnaudio=this.innerHTML;
    addsound(btnaudio);
    addanimtn(btnaudio);

});
}

document.addEventListener("keypress",function(event){
    addsound(event.key);
    addanimtn(event.key);

});

function addsound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds\\crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds\\kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds\\snare.mp3");
            audio.play();   
            break;    
        case "d":
            var audio=new Audio("sounds\\tom-2.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds\\tom-2.mp3");
            audio.play();    
            break;
        case "k":
            var audio= new Audio("sounds\\tom-3.mp3");
            audio.play();
            break;  
        case "l":
            var audio=new Audio("sounds\\tom-4.mp3");
            audio.play();
            break;      
        default:
            console.log("helo");
            break;
    }
}
function addanimtn(ani){
var actbtn=document.querySelector("."+ani);
actbtn.classList.add("pressed");
setTimeout(function(){
    actbtn.classList.remove("pressed");
},1);
}
