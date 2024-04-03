let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
}

updatescore()

let isautoplaying = false;
let intervalId;
function autoPlay() {
    document.querySelector('.reset1').innerHTML = 'Stop';
    document.querySelector(".reset1").style.backgroundColor = "red";
    document.querySelector(".reset1").style.color = "white";

    if (!isautoplaying) {
        let html = `Match Between Computer VS GPT`
        document.querySelector('.match').innerHTML = html;
        intervalId = setInterval(()=> {
            const compmove = rockpapersc();
            const auto_play = rockpapersc();
            playmove(auto_play, compmove);
        }, 1000);
        isautoplaying = true;
    }
    else {
        document.querySelector('.reset1').innerHTML = 'GPT';
        document.querySelector(".reset1").style.backgroundColor = "black";
        document.querySelector(".reset1").style.color = "wheat";
        clearInterval(intervalId);
        isautoplaying = false;
    }
}
function playmove(playermove, compmove) {
    if (playermove === 'scissors') {
        if (compmove === 'rock') {
            result = 'Lost'
            score.losses += 1
        }
        else if (compmove === 'scissors') {
            result = 'Tie'
            score.tie += 1
        }
        else {
            result = 'Won'
            score.wins += 1
        }
        updatescore()
    }
    if (playermove === 'rock') {
        if (compmove === 'rock') {
            result = 'Tie';
            score.tie += 1
        }
        else if (compmove === 'scissors') {
            result = 'You won';
            score.wins += 1
        }
        else if (compmove === 'paper') {
            result = 'You Lost';
            score.losses += 1
        }
        updatescore()
    }
    if (playermove === 'paper') {
        if (compmove === 'rock') {
            result = 'Won'
            score.wins += 1
        }
        else if (compmove === 'scissors') {
            result = 'Lost'
            score.losses += 1
        }
        else {
            result = 'Tie'
            score.tie += 1
        }
        updatescore()
    }
    document.querySelector('.Score').innerHTML = result;
    document.querySelector('.Choice').innerHTML = `You choosed:<img class="imgg" src="${playermove}-emoji.png">  
        and Machine Choosed:<img class="imgg" src="${compmove}-emoji.png"> `;
    localStorage.setItem('score', JSON.stringify(score));

}
function rockpapersc() {
    let num = Math.random();
    let compmove = '';
    if (num >= 0 && num < 1 / 3) {
        return 'rock';
    }
    else if (num >= 1 / 3 && num < 2 / 3) {
        return 'paper';
    }
    else if (num >= 2 / 3 && num < 1) {
        return 'scissors';
    }
}
function updatescore() {
    document.querySelector('.Score2').innerHTML = `Score: Wins: ${score.wins},
     Losses: ${score.losses}, Tie: ${score.tie}`
}

function match(){
    let html = `Match Between: You VS Computer`
    document.querySelector('.match').innerHTML = html;
}