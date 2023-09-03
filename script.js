let yesNoBall = ['YES!', 
            'Try Again', 
            'No', 
            'Absolutely Not', 
            'Definitely Yes'];
let timeBall = ['Soon',
            'Never',
            'Always',
            'Tomorrow',
            'Next Week',
            'Next Month',
            'Next Year']
let numberBall = ['5',
            'Just a Few',
            '3',
            '10',
            'Many More']
let question = [''];
let startPoint = '8';
let classFont = 'font';


updateView();

function updateView(){
    document.getElementById("eightball").innerHTML = /*HTML*/ `

    <h1> Magic 8ball </h1>

    <div class = "main">
        <div class = "window">
            <div class = "ball8">
                <div class = "whiteCircle" id = "answer" onclick ="userQuestion()">
                    <div class = "${classFont}">
                        ${startPoint}
                    </div>
                </div>
            </div>
        </div>
        <div class = "inputArea">
            <h4> Ask me Anything </h4>
            <input type="text" id="userInput" onclick="tryAgain()">
        </div>
    </div>
    ;`
}
let input = document.getElementById("userInput");
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        validate(e);
    }
});
function validate(e) {
    question = e.target.value;
    userQuestion();
    userInput = "";
}

function userQuestion(){
    question = document.getElementById("userInput");
    if (question.value.indexOf('when') > -1) {
        getRandomTimeAnswer();
    } else if (question.value.indexOf('many') > -1) {
        getRandomNumberAnswer();
    } else {
        getRandomAnswer();
    }
}


function getRandomTimeAnswer(){
    let randomIndex = Math.floor(Math.random() * timeBall.length);
    let timeBallTxt = timeBall.length > 0 ? timeBall[randomIndex] : 'Go Away!'
    classFont = '';
    startPoint = timeBallTxt;
    updateView();
}

function getRandomNumberAnswer(){
    let randomIndex = Math.floor(Math.random() * numberBall.length);
    let numberBallTxt = numberBall.length > 0 ? numberBall[randomIndex] : 'Go Away!'
    classFont = '';
    startPoint = numberBallTxt;
    updateView();
}

function getRandomAnswer(){
    let randomIndex = Math.floor(Math.random() * yesNoBall.length);
    let yesNoBallTxt = yesNoBall.length > 0 ? yesNoBall[randomIndex] : 'Go Away!'
    classFont = '';
    startPoint = yesNoBallTxt;
    // yesNoBall.splice(randomIndex, 1);
    updateView();
}

function tryAgain(){
    document.getElementById("answer").reset();
}