function w_button(key)
{   var audio;
    buttonp(key);
   
   
    switch (key) {
         case "w":
            audio=new Audio("sounds/crash.mp3");
            audio.play();
         break;
         case "a":
            audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
         break;
         case "s":
            audio=new Audio("sounds/snare.mp3");
            audio.play();
         break;
         case "d":
            audio=new Audio("sounds/tom-1.mp3");
            audio.play();
         break; 
         case "i":
            audio=new Audio("sounds/tom-2.mp3");
            audio.play();
         break;
         case "j":
            audio=new Audio("sounds/tom-3.mp3");
            audio.play();
         break;
         case "k":
            audio=new Audio("sounds/tom-4.mp3");
            audio.play();
         break;
    
        default:
            break;
    }

   
}
var n=document.querySelectorAll(".drum").length;

for(var i=0; i<n ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var k=this.innerHTML
        w_button(k);
        
        
    });
    

}

document.addEventListener("keydown",function(event){

   
    var k= event.key;
    w_button(k);
    buttonp(k);
    
    
    
    
})

function buttonp(bt) 
{   
    var k=document.querySelector("."+bt);
    k.classList.add("pressed");
    
    setTimeout(function(){ k.classList.remove("pressed")},100)
    
    
}

