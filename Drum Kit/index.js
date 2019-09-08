function makeSound(keyValue) {
    switch (keyValue) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("default key, keyValue = " + keyValue);
            break;
    }
}

function buttonAnimation(currentKey) {
    console.log("buttonAnimation: currentKey = " + currentKey);
    var button = document.querySelector("." + currentKey);
    console.log("buttonAnimation: " + button);
    button.classList.toggle("pressed");
    setTimeout(function () { button.classList.toggle("pressed"), 100})
}

// detecting button press
var btnArr = document.querySelectorAll("button");
for (var ind = 0; ind < btnArr.length; ind++) {
    btnArr[ind].addEventListener("click", function () {
        var ch = this.textContent;
        console.log("click: " + ch);
        makeSound(ch);
        buttonAnimation(ch);
    });
}

// detecting keypress
document.addEventListener("keypress", function (event) {
    console.log("keypress: " + event);
    makeSound(event.key);
    buttonAnimation(event.key);
})