let answers = ['YES!', 
            'Try Again', 
            'No', 
            'Absolutely Not', 
            'Definitely Yes'];
let startAnswer = '8';

updateView();

function updateView(){
    document.getElementById("eightball").innerHTML = /*HTML*/ `
    
    <div class = "ball8">
        <div class = "whiteCircle" onclick = "getAnswer()"> ${answer} </div>
    </div>
    ;`
}

function getAnswer(){
    let randomIndex = Math.floor(Math.random() * answers.length);
    let answer = answers[randomIndex];
    document.getElementById('whiteCircle').innerText = answer;
}