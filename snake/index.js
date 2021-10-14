const gameCnavase = document.getElementById("gameCanvas");

const ctx = gameCnavase.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "black";

ctx.fillRect(0, 0, gameCnavase.width, gameCnavase.height);
ctx.strokeRect(0, 0, gameCnavase.width, gameCnavase.height);

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

snake.forEach((snakePart) => {
  ctx.fillStyle = "lightgreen";
  ctx.strokeStyle = "black ";

  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
});

const randomNumber = (max, min) =>
  Math.round((Math.random() * (max - min) + min) / 10) * 10;

let foodX;
let foodY;

const createFood = () => {
  foodX = randomNumber(0, gameCnavase.width);
  foodY = randomNumber(0, gameCnavase.height);
  snake.forEach(snakePart => {
      if(snakePart.x === foodX && snakePart.y === foodY){
          createFood()
      }
  })
};

createFood()

ctx.fillStyle = "red";
ctx.strokeStyle = "darkred";

ctx.fillRect(foodX, foodY, 10, 10);
ctx.strokeRect(foodX, foodY, 10, 10);
