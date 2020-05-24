var soundButton = document.querySelectorAll(".btn")


for(var i = 0; i<soundButton.length; i++){
    
    soundButton[i].addEventListener("click", function(){
        var buttonValue = this.getAttribute("value");   
        console.log(buttonValue);  
        makeSound(buttonValue); 
        
    });
}


document.addEventListener("keypress", function(event){
  makeSound(event.key)
});


function makeSound(key){
    switch (key){
        case "q":
            playAudio("man_laugh.wav");
        break;

        case "w":
            playAudio("man_laugh2.wav");
        break;

        case "e":
            playAudio("woman_laugh.wav");
        break;

        case "r":
            playAudio("woman_laugh2.wav");
        break;

        case "t":
            playAudio("woman_laugh3.wav");
        break;

        case "a":
            playAudio("applause.wav");
        break;

        case "s":
            playAudio("crowd_laugh.mp3");
        break;

        case "d":
            playAudio("people-laugh1.mp3");
        break;

        case "f":
            playAudio("drums.mp3");
        break;

        case "z":
            playAudio("crowd_boo.mp3");
        break;

        case "x":
            playAudio("not_funny.mp3");
        break;




        
    }
}

function playAudio(audioURL ){

    var audioObject = new Audio("sounds/" + audioURL);
    audioObject.play();

}

