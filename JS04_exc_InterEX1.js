function makeSantaDisappear(santa) {
    santa.style.visibility = 'hidden';
}
// Wichtig ist die Ergänzung .getAttribute, da sonst IMages nur im absoluten eingebaut werden müssen. 1. Klick wechsel von einem (Gift_Box) zu einem anderen (1-2-christmas-bell-png-image.png) Bild, bei weiterem Klick kommt wieder das ursprüngliche Bild (Gift_Box)
function changeBoxto(Gift_Box) {
    if(Gift_Box.getAttribute("src") == "/media/img/1-2-christmas-bell-png-image.png") {
    Gift_Box.src="/media/img/Gift_Box.png"
    }
    else{Gift_Box.src="/media/img/1-2-christmas-bell-png-image.png"};
}
// Zusatz Aufgabe: wenn Santa disappeared (verschwindet), dann soll er bei nochmaligen Klick wiedererscheinen
let santa2status = true;
function santaAppears(Santa2) {
    if(santa2status == true){
        Santa2.style.opacity = "0";
        santa2status = false;
    }else{
        Santa2.style.opacity = "1";
        santa2status = true;
    }
    // if(Santa2.style.visibility = 'hidden' == "hidden") {
    // Santa2.src="/media/img/santa-claus.png"
    // }
    // else{
    //     Santa2.style.visibility ='visible';
    // }
}
function changeBackgroundColor() {
    // Generate random RGB values
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Set the background color using RGB values
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
