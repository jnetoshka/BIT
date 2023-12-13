function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let atsitiktinisSkaicius = rand(1, 20),
    spejimuSkaicius = 6;
    console.log(atsitiktinisSkaicius)

function guessNumber(){
let inputElement = document.querySelector("#guess");
let resultParagraph = document.querySelector("#rez");
let guessCountElement= document.querySelector("#spejimu-skaicius")

if(spejimuSkaicius === 0){
    resultParagraph.innerText = `Spejimu skaicius baigesi, bandykite dar karta perkrove puslpai`;
    return;
}
spejimuSkaicius--;
guessCountElement.innerText = spejimuSkaicius;
let inputValue = inputElement.value;

if(inputValue > atsitiktinisSkaicius)
{
    resultParagraph.innerText = `Spejimas buvo neteisingas, ieskomas skaicius yra mazesnis`;
}
else if(inputValue > atsitiktinisSkaicius)
{
    resultParagraph.innerText = `Spejimas buvo neteisingas, ieskomas skaicius yra didesnis`;''
}
else{
    resultParagraph.innerText = `Teisingaas spejimas. Po ${6-spejimuSkaicius
    } bandymu`;
}
    }