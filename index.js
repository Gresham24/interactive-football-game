/* ===========================================================================

        DECLARE VARIABLES

============================================================================== */

const ball = document.getElementById('football');
const ballOP = document.getElementById('football').getBoundingClientRect(); // getBoundingClientRect() obtains an object with its size and position relative to the viewport.  
const goalPost = document.getElementById('goal-post');
const container = document.getElementById('container');
const scoreboard = document.getElementById('score');
let score = Number(document.getElementById('score').textContent);
const restartGame = document.getElementById('new-game-btn');
// Difficulty selector elements
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
const dropdown = document.getElementById('difficulty-select');
// Keeper and defenders 
const keeper = document.getElementById('goal-keeper');
const defender1 = document.getElementById('defender-one');
const defender2 = document.getElementById('defender-two');
// Alerts
const goal = document.getElementById('goal');
const blocked = document.getElementById('blocked');


/* ===========================================================================

            EVENT LISTENERS 

============================================================================== */


// Set the initial position of the ball to be its current position
ball.style.left = ball.offsetLeft + 'px';
ball.style.top = ball.offsetTop + 'px';

// TO DRIBBLE THE BALL - MOVE THE BALL TO A MOUSE CLICK POSITION
container.addEventListener('click', (event) => {
    // Get the mouse click position
    const x = event.clientX;
    const y = event.clientY;
    // Move ball to the mouse click position
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    defend();
    checkElements();
});


// TO START NEW GAME
restartGame.addEventListener('click', function () {
    score = 0;
    scoreboard.innerHTML = score;
    resetBall();
})


// CHANGE DIFFICULTY LEVEL BY ADDING DEFENDERS
dropdown.addEventListener('change', (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'medium') {
        defender1.style.display = 'initial';
        defender2.style.display = 'none';
    } else if (selectedOption === 'hard') {
        defender1.style.display = 'initial';
        defender2.style.display = 'initial';
    } else {
        defender1.style.display = 'none';
        defender2.style.display = 'none';
    }
});

/* ===========================================================================

            FUNCTIONS 

============================================================================== */

let interval;

// CHECK IF OBJECTS ARE INTERSECTING 
function objectsIntersect(x, y) {
    // Get the bounding client rectangles for each element
    const domRect1 = x.getBoundingClientRect();
    const domRect2 = y.getBoundingClientRect();

    // Check if the elements intersect by comparing the edges of one element to the other
    // If all of the edges of one element are inside the other element, then the elements intersect
    return !(
        domRect1.top > domRect2.bottom ||   // Check if the top edge of x is below the bottom edge of y
        domRect1.right < domRect2.left ||   // Check if the right edge of x is to the left of the left edge of y
        domRect1.bottom < domRect2.top ||   // Check if the bottom edge of x is above the top edge of y
        domRect1.left > domRect2.right  // Check if the left edge of x is to the right of the right edge of y
    );
}


// CHECK IF THE ELEMENT INTERSECTION IS A GOAL OR BLOCK BY THE KEEPER
function checkElements() {
    setTimeout(() => {
        if (objectsIntersect(ball, goalPost)) {
            if (objectsIntersect(ball, keeper)) {
                alertBlock()
                resetBall();
            } else {
                alertGoal();
                addScore();
                resetBall();
            }
        }
    }, 900);
}

// CHECK IF THE ELEMENT INTERSECTION IS A BLOCK BY THE DEFENDERS
function defend() {
    if (objectsIntersect(ball, defender2)) {
        resetBall();
    }
    if (objectsIntersect(ball, defender1)) {
        resetBall();
    }
}


// TO TRACK AND DISPLAY THE SCORE IN THE DOM
function addScore() {
    score++;
    scoreboard.innerHTML = score;
}

// DISPLAY GOAL ALERTS
function alertGoal() {
    goal.style.display = 'initial';
    setTimeout(() => {
        goal.style.display = 'none';
    }, 800);
}

// DISPLAY BLOCK ALERTS
function alertBlock() {
    blocked.style.display = 'initial';
    setTimeout(() => {
        blocked.style.display = 'none';
    }, 800);
}



// TO RESET THE BALL BACK TO ORIGINAL POSITION
function resetBall() {
    keeper.style.animationPlayState = 'running';
    // set ball to original position 
    ball.style.top = ballOP.top + 'px';
    ball.style.left = ballOP.left + 'px';
}


// TO PAUSE THE KEEPER AND DEFENDERS 
function pausePlayers() {
    keeper.style.animationPlayState = 'paused';
}






