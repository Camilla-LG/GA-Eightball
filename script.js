let cueBall = ['YES!', 
            'Try Again', 
            'No', 
            'Absolutely Not', 
            'Definitely Yes'];
let startPoint = '8';
let classFont = 'font';

updateView();

function updateView(){
    document.getElementById("eightball").innerHTML = /*HTML*/ `

    <div class = "window">
        <div class = "ball8">
            <div class = "whiteCircle" onclick ="getRandomAnswer()">
                <div class = "${classFont}">
                    ${startPoint}
                </div>
            </div>
        </div>
    </div>
    ;`
}

function getRandomAnswer(){
    let randomIndex = Math.floor(Math.random() * cueBall.length);
    let cueBallTxt = cueBall.length > 0 ? cueBall[randomIndex] : 'Cash, please'
    classFont = '';
    startPoint = cueBallTxt;
    cueBall.splice(randomIndex, 1);
    updateView();
}