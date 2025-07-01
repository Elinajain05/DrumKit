var numOfDrums = document.querySelectorAll(".drum").length;

for (var i= 0 ; i <numOfDrums ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){     //higher order function : takes function as input

        var buttonclicked = this.innerHTML ; 

        makeSound(buttonclicked);
        buttonAnimation(buttonclicked)

    } );
}


document.addEventListener("keypress" , function(event){ 
    makeSound(event.key);
    buttonAnimation(event.key);
});
//keypress for keyboard key
//look for keypress in chrome for better understanding 
//behind this funtion the key that is stores in the constructor is called


function makeSound(key)
{
    switch (key)
        {
            case "w":
                var audio1 = new Audio("sounds/tom-1.mp3");
                audio1.play();
            break;

            case "a":
                var audio2 = new Audio("sounds/tom-2.mp3");
                audio2.play();
            break;

            case "s":
                var audio3 = new Audio("sounds/tom-3.mp3");
                audio3.play();
            break;

            case "d":
                var audio4 = new Audio("sounds/tom-4.mp3");
                audio4.play();
            break;

            case "j":
                var audio5 = new Audio("sounds/snare.mp3");
                audio5.play();
            break;

            case "k":
                var audio6 = new Audio("sounds/crash.mp3");
                audio6.play();
            break;

            case "l":
                var audio7 = new Audio("sounds/kick-bass.mp3");
                audio7.play();
            break;

            default: console.log(key);
        }
}

function buttonAnimation(cureentkey)
{
    var activeKey = document.querySelector("." + cureentkey);
    activeKey.classList.add("pressed");            
    setTimeout (function()                               
    { // setTimeout (function , time after which work is done in millisec)
        activeKey.classList.remove("pressed")
    }, 100);
}