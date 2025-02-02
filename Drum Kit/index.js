var numOfDrums = document.querySelectorAll(".drum").length;
for(let i=0; i<numOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let btnInnerHtml = this.innerHTML;
        sounds(btnInnerHtml);
        animation(btnInnerHtml);
    });
}
document.addEventListener("keypress", function (event) {
    sounds(event.key);
    animation(event.key)
});
function sounds(key) {
    switch (key) {
        case "w":
            var crash = new Audio('sounds/c.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/k.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/s.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/t1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/t2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/t3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/t4.mp3");
            tom4.play();
            break;
        default:
            alert("Invalid btn")
            break;
    }
}

function animation(btnPressed) {
    var btn = document.querySelector("." + btnPressed);
    btn.classList.add("pressed");
    setTimeout(function () {
        btn.classList.remove("pressed");
    }, 300);
}