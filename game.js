let UserBoxImage = document.querySelector('.user-pick');
let ComputerBoxImage = document.querySelector('.computer-pick');
let Dots = document.querySelector('.dots');
let ComputerImageGlobal = null;
let GameResult = document.querySelector('.user-heading');


function Game(UserChoice) {
    GameResult.innerHTML = 'Playing...';
    let UserTurn = UserChoice;
    console.log("user choice: ", UserTurn);
    let ComputerTurn = ComputerChoice();
    SetUserImage(UserChoice);
    DoAnimation();
    setTimeout(function(){PlayGame(ComputerTurn, UserTurn);}, 3000);
}

function SetUserImage(ImageName) {
    if(ImageName == 'rock') {
        UserBoxImage.src = './img/rock.png';
    }else if(ImageName == 'paper') {
        UserBoxImage.src = './img/paper.png';
    }else {
        UserBoxImage.src = './img/scissor.png';
    }
}

function ContinueComputer() {
    Dots.style.display = 'none';
    setAnima();
    SetComputerImage(ComputerImageGlobal);
}

function SetComputerImage(ImageName) {
    //ComputerBoxImage.style.display = 'block';
    if(ImageName == 'rock') {
        ComputerBoxImage.style.display = 'block';
        ComputerBoxImage.src = './img/rock.png';
    }else if(ImageName == 'paper') {
        ComputerBoxImage.style.display = 'block';
        ComputerBoxImage.src = './img/paper.png';

    }else {
        ComputerBoxImage.style.display = 'block';
        ComputerBoxImage.src = './img/scissor.png';
    }
}

function DoAnimation() {
    ComputerBoxImage.style.display = 'none';
    Dots.style.display = 'block';
    AnimateDots();
    setTimeout(ContinueComputer, 2080);
}

function AnimateDots() {
    let i = 0;
    let id = setInterval(anima, 520);
    function anima() {
        let x = document.getElementsByClassName('sp');
        i++;
        if(i == 1) {
            x[0].style.opacity = '1';
        }else if(i == 2) {
            x[1].style.opacity = '1';
        }else if(i == 3) {
            x[2].style.opacity = '1';
        }else if(i == 4) {
            clearInterval(id);
        }
    }
}

function setAnima() {
    let x = document.getElementsByClassName('sp');
    x[0].style.opacity = '0';
    x[1].style.opacity = '0';
    x[2].style.opacity = '0';
}

function ComputerChoice() {
    let ComputerChoiceVar = null;
    let RandomNumber = Math.floor(Math.random() * 31);
    if(RandomNumber >= 0 && RandomNumber <= 10) {
        ComputerChoiceVar = 'rock';
    }else if(RandomNumber >= 11 && RandomNumber <= 20) {
        ComputerChoiceVar = 'paper';
    }else if(RandomNumber >= 21 && RandomNumber <= 31) {
        ComputerChoiceVar = 'scissor';
    }
    ComputerImageGlobal = ComputerChoiceVar;
    console.log("Computer: ", ComputerChoiceVar, RandomNumber);
    return ComputerChoiceVar;
}

function PlayGame(ComputerTurn, UserTurn) {
    if(ComputerTurn == UserTurn) {
        GameResult.innerHTML = "Game Draw!🔃";
    }else if(ComputerTurn == 'rock' && UserTurn == 'paper') {
        GameResult.innerHTML = 'You Won!🎉';
    }else if(ComputerTurn == 'paper' && UserTurn == 'rock') {
        GameResult.innerHTML = 'Computer Won!🤖';
    }else if(ComputerTurn == 'paper' && UserTurn == 'scissor') {
        GameResult.innerHTML = 'You Won!🎉';
    }else if(ComputerTurn == 'scissor' && UserTurn == 'paper') {
        GameResult.innerHTML = 'Computer Won!🤖';
    }else if(ComputerTurn == 'scissor' && UserTurn == 'rock') {
        GameResult.innerHTML = 'You Won!🎉';
    }else if(ComputerTurn == 'rock' && UserTurn == 'scissor') {
        GameResult.innerHTML = 'Computer Won!🤖';
    }
}


// function GameReset() {
//     UserBoxImage.src = './img/question-mark.png';
//     ComputerBoxImage.src = './img/question-mark.png';
// }
