const gameCnavase = document.getElementById("gameCanvas");

const ctx = gameCnavase.getContext("2d");

document.addEventListener('keydown',changeDirection)

//??? Global Variabels

// snake path direction
let dx = 10;
let dy =0;
// total score
let score = 0;
// food lcoation
let foodX;
let foodY;

// handle direction of sanke by arrow keys
function changeDirection(event){

    //* select keys 
    const LEFT_KEY =37 ;
    const RIGHT_KEY = 39 ;
    const UP_KEY = 38 ;
    const DOWN_KEY = 40;
    
    const keyPress = event.keyCode;

    if(keyPress === LEFT_KEY && dx!== 10){
        dx -= 10;
        dy = 0
    }
    if(keyPress === RIGHT_KEY && dx !== -10){
        dx = 10;
        dy =0;
    }
    if(keyPress === UP_KEY && dy !== 10){
        dx = 0;
        dy -= 10;
    }
    if(keyPress === DOWN_KEY && dy !== -10){
        dx = 0;
        dy = 10;
    }
}

// create snake board
const clearSnake = () => {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";

  ctx.fillRect(0, 0, gameCnavase.width, gameCnavase.height);
  ctx.strokeRect(0, 0, gameCnavase.width, gameCnavase.height);
};

// sanke default length
let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

const randomNumber = (max, min) =>
  Math.round((Math.random() * (max - min) + min) / 10) * 10;

  
function main() {
    // check if game is end 
    if(didGameEnd) return;
  setInterval(() => {
    clearSnake();
    drawFood();
    advanceSnake();
    drawSnake();

    main()
  }, 500);
}

function didGameEnd () {

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCnavase.width - 10;
    const hitTopWall = snake[0].y > 0;
    const hitBottomWall = snake[0].y < gameCnavase.height - 10;

    return hitBottomWall || hitLeftWall || hitRightWall || hitTopWall;
}

const createFood = () => {
  foodX = randomNumber(0, gameCnavase.width);
  foodY = randomNumber(0, gameCnavase.height);
  snake.forEach((snakePart) => {
    if (snakePart.x === foodX && snakePart.y === foodY) {
      createFood();
    }
  });
};

const drawSnake = () => {
  snake.forEach((snakePart) => {
    ctx.fillStyle = "lightgreen";
    ctx.strokeStyle = "black ";

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  });
};

const drawFood = () => {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "darkred";

  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
};

createFood();

const advanceSnake = () => {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  snake.unshift(head);
    if(head.x === foodX && head.y === foodY) {
        score += 10;

        document.querySelector('.score').innerHTML = score;

        createFood()
    }

  snake.pop();
};

advanceSnake();

main()