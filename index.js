document.addEventListener("keydown", function (event) {
    // Check if the pressed key is an arrow key (up or down)
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        // Prevent the default behavior (scrolling)
        event.preventDefault();
    }
});

// Get references to HTML elements and set up canvas context
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

// Set up initial game parameters and constants
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "black";
const snakeColor = "#D5E1A3";
const snakeBorder = "black";
const foodColor = "#A40E4C";
const unitSize = 25;

// Initialize game state variables
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

// Initialize the snake with initial positions
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

// Add event listeners for key input and reset button
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

// Start the game
gameStart();

// Function to start the game
function gameStart(){
    running= true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};

// Function for the game loop
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75);
    }
    else{
        displayGameOver();
    }
};

// Function to clear the game board
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

// Function to create random food at a random position
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
};

// Function to draw the food on the canvas
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};

// Function to move the snake
function moveSnake(){
    const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};
    snake.unshift(head);
    // If the snake eats the food
    if(snake[0].x == foodX && snake[0].y == foodY){
        score += 1;
        scoreText.textContent = score;
        createFood();
    }
    else{
        snake.pop();
    }
};

// Function to draw the snake on the canvas
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
};

// Function to handle direction change based on key input
function changeDirection(event){
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};

// Function to check if the game is over
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }
    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

// Function to display game over message
function displayGameOver(){
    ctx.font = "50px Courier New";
    ctx.fillStyle = "#878787ff";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;
};

// Function to reset the game
function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
};

