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
let startPoint = '8';
let classFont = 'font';

updateView();

function updateView(){
    document.getElementById("eightball").innerHTML = /*HTML*/ `

    <h1> Magic 8ball </h1>

    <div class = "main">
    <div class = "window">
        <div class = "ball8">
            <div class = "whiteCircle" onclick ="getRandomAnswer()">
                <div class = "${classFont}">
                    ${startPoint}
                </div>
            </div>
        </div>
    </div>
    <div class = "inputArea">
        <h4> Ask me Anything </h4>
        <br/>
        <input type = "text" id = "userInput" onchange = "">
    </div>
    </div>
    ;`
}

function getRandomAnswer(){
    let randomIndex = Math.floor(Math.random() * yesNoBall.length);
    let yesNoBallTxt = yesNoBall.length > 0 ? yesNoBall[randomIndex] : 'Go Away!'
    classFont = '';
    startPoint = yesNoBallTxt;
    // yesNoBall.splice(randomIndex, 1);
    updateView();
}