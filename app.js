const squares = document.querySelectorAll('.container div');
let currentIndex = 60;
const scarry = document.querySelector('.scarry');
const scarSound = new Audio('scream.mp3');
const wrong = new Audio('wrong_ans.mp3');
console.log(squares);

function checkForBounds () {
    if (currentIndex == 80  || 
        currentIndex == 81 || 
        currentIndex == 82 || 
        currentIndex == 83 || 
        currentIndex == 84 || 
        currentIndex == 85 || 
        currentIndex == 86 || 
        currentIndex == 87 || 
        currentIndex == 88 || 
        currentIndex == 108 || 
        currentIndex == 129 || 
        currentIndex == 130 || 
        currentIndex == 131 || 
        currentIndex == 132 || 
        currentIndex == 133 || 
        currentIndex == 134 || 
        currentIndex == 135 || 
        currentIndex == 136 || 
        currentIndex == 137 || 
        currentIndex == 138 || 
        currentIndex == 139 || 
        currentIndex == 39 || 
        currentIndex == 59 || 
        currentIndex == 72 ||
        currentIndex == 52 ||  
        currentIndex == 31 || 
        currentIndex == 30 || 
        currentIndex == 29 || 
        currentIndex == 28 || 
        currentIndex == 27 || 
        currentIndex == 26 || 
        currentIndex == 25 || 
        currentIndex == 24 || 
        currentIndex == 23 || 
        currentIndex == 22 || 
        currentIndex == 21 || 
        currentIndex == 20 || 
        currentIndex == 73 || 
        currentIndex == 74 || 
        currentIndex == 75 || 
        currentIndex == 76 || 
        currentIndex == 77 || 
        currentIndex == 78 || 
        currentIndex == 79
        ) {
            squares[currentIndex].classList.remove('character');
            currentIndex = 40;
            wrong.play();
            console.log(currentIndex);
            squares[currentIndex].classList.add('character');
        }
}
setInterval(checkForBounds, 10);
function moveCharacter (e) {
    switch(e.key) {
        case 'ArrowRight':
            squares[currentIndex].classList.remove('character');
            currentIndex++;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
        case 'ArrowLeft':
            squares[currentIndex].classList.remove('character');
            currentIndex--;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
        case 'ArrowUp':
            squares[currentIndex].classList.remove('character');
            currentIndex -= 20;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
        case 'ArrowDown':
            squares[currentIndex].classList.remove('character');
            currentIndex += 20;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
            case 'd':
            squares[currentIndex].classList.remove('character');
            currentIndex++;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
        case 'a':
            squares[currentIndex].classList.remove('character');
            currentIndex--;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
        case 'w':
            squares[currentIndex].classList.remove('character');
            currentIndex -= 20;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
        case 's':
            squares[currentIndex].classList.remove('character');
            currentIndex += 20;
            squares[currentIndex].classList.add('character');
            console.log(currentIndex);
            break;
    }
}
function checkForWin() {
    if (currentIndex == 99  || currentIndex == 119) {
        scarry.style.opacity = "1";
        scarSound.play();
        clearInterval(chackWint);
    }
}
let chackWint = setInterval(checkForWin,  1);
document.addEventListener('keyup', moveCharacter);
