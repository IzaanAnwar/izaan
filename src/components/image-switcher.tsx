"use client";
import { useEffect, useState } from "react";

const ROWS = 20;
const COLS = 20;
const CELL_SIZE = 30;

export function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState("RIGHT");
  const [isGameOver, setIsGameOver] = useState(false);
  const [firstGame, setIsFirstGame] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      if (isGameOver) return;

      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case "UP":
          head.y--;
          break;
        case "DOWN":
          head.y++;
          break;
        case "LEFT":
          head.x--;
          break;
        case "RIGHT":
          head.x++;
          break;
        default:
          break;
      }

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setFood(getRandomFoodPosition());
      } else {
        newSnake.pop();
      }

      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= COLS ||
        head.y >= ROWS ||
        isSnakeColliding(newSnake)
      ) {
        setIsGameOver(true);
      } else {
        setSnake(newSnake);
      }
    };

    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [snake, direction, isGameOver]);

  const getRandomFoodPosition = () => {
    return {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  };

  const isSnakeColliding = (
    snake: {
      x: number;
      y: number;
    }[]
  ) => {
    const head = snake[0];
    return snake
      .slice(1)
      .some((segment) => segment.x === head.x && segment.y === head.y);
  };

  const renderGrid = () => {
    const grid = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const isSnakeSegment = snake.some(
          (segment) => segment.x === col && segment.y === row
        );
        const isFood = food.x === col && food.y === row;
        grid.push(
          <div
            key={`${col}-${row}`}
            className={`cell ${isSnakeSegment ? "snake" : ""} ${
              isFood ? "food" : ""
            }`}
            style={{
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
            }}
          />
        );
      }
    }
    return grid;
  };
  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(getRandomFoodPosition());
    setDirection("RIGHT");
    setIsGameOver(false);
    setIsFirstGame(false);
  };

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(getRandomFoodPosition());
    setDirection("RIGHT");
    setIsGameOver(false);
    setIsFirstGame(false);
  };

  return (
    <div className="snake-game-container">
      {isGameOver ? (
        <div className="button-container flex justify-center items-center relative">
          {!firstGame && <button onClick={restartGame}>Restart</button>}
          {firstGame && <button onClick={startGame}>Start</button>}
        </div>
      ) : (
        <div className="snake-game">{renderGrid()}</div>
      )}
    </div>
  );
}
