let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let header = document.getElementById("header");


one.addEventListener('mouseover', function() {
    textSpeakOne();
})

two.addEventListener('mouseover', function() {
    textSpeakTwo();
})

three.addEventListener('mouseover', function() {
    textSpeakThree();
})

four.addEventListener('mouseover', function() {
    textSpeakFour();
})

five.addEventListener('mouseover', function() {
    textSpeakFive();
})

six.addEventListener('mouseover', function() {
    textSpeakSix();
})

seven.addEventListener('mouseover', function() {
    textSpeakSeven();
})

eight.addEventListener('mouseover', function() {
    textSpeakEight();
})

nine.addEventListener('mouseover', function() {
    textSpeakNine();
})

ten.addEventListener('mouseover', function() {
    textSpeakTen();
})

header.addEventListener('mouseover', function() {
    textSpeakHeader();
})


function textSpeakHeader(){
    let text = document.getElementById("header").textContent;
    responsiveVoice.speak(text);
}

function textSpeakSpeak(){
    let text = document.getElementById("speak").value;
    responsiveVoice.speak(text);
}

function textSpeakOne(){
    let text = document.getElementById("one").textContent;
    responsiveVoice.speak(text);
}

function textSpeakTwo(){
    let text = document.getElementById("two").textContent;
    responsiveVoice.speak(text);
}

function textSpeakThree(){
    let text = document.getElementById("three").textContent;
    responsiveVoice.speak(text);
}

function textSpeakFour(){
    let text = document.getElementById("four").textContent;
    responsiveVoice.speak(text);
}

function textSpeakFive(){
    let text = document.getElementById("five").textContent;
    responsiveVoice.speak(text);
}

function textSpeakSix(){
    let text = document.getElementById("six").textContent;
    responsiveVoice.speak(text);
}

function textSpeakSeven(){
    let text = document.getElementById("seven").textContent;
    responsiveVoice.speak(text);
}

function textSpeakEight(){
    let text = document.getElementById("eight").textContent;
    responsiveVoice.speak(text);
}

function textSpeakNine(){
    let text = document.getElementById("nine").textContent;
    responsiveVoice.speak(text);
}

function textSpeakTen(){
    let text = document.getElementById("ten").textContent;
    responsiveVoice.speak(text);
}
