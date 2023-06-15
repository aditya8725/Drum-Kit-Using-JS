// alert("Helloo")

// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick()
// {
//     alert("I got clicked");
// }

//or


//detecting button press

var nofdrumbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<nofdrumbutton;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
        // console.log(this.style.color="white")
        var buttoninnerHTML = this.innerHTML

        makesound(buttoninnerHTML);
       
        buttonanimation(buttoninnerHTML);
    })
}


//detecting keyboard press

document.addEventListener("keydown",function(event)
{
    //alert("Key was pressed");
    // console.log(event)
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key)
{
    switch (key) {
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;

            case "a":
                var tom2= new Audio('sounds/tom-2.mp3')
                tom2.play();
                break;

            case "s":
                var tom3= new Audio('sounds/tom-3.mp3')
                tom3.play();
                break;
            
            case "d":
                var tom4= new Audio('sounds/tom-4.mp3')
                tom4.play();
                break;

            case "j":
                var snare= new Audio('sounds/snare.mp3')
                snare.play();
                break;

            case "k":
                var crash= new Audio('sounds/crash.mp3')
                crash.play();
                break;

            case "l":
                var kick= new Audio('sounds/kick-bass.mp3')
                kick.play();
                break;
                
            
        default: console.log(buttoninnerHTML);
    }
}

function buttonanimation(currentkey)
{
    var activebtn = document.querySelector("." + currentkey);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}





// var audio= new Audio('sounds/tom-1.mp3')
// audio.play();