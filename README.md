# Snake Game

Welcome to the Classic Snake Game implemented using HTML5 Canvas and JavaScript!

## Overview

This project is a simple implementation of the iconic Snake game where players control a snake, guiding it to eat food and grow longer. The game features a responsive and interactive interface, allowing users to play directly in their web browsers.

## Demo

You can play the game on the following website: [Snake Game](https://kintsugi-programmer.github.io/Snake-Game/)

## Features

- **Responsive Gameplay:** Control the snake using arrow keys to navigate through the game board.
- **Scoring:** Increase your score by consuming food items.
- **Game Over:** The game ends if the snake collides with the walls or itself.

## Getting Started

To run the game locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kintsugi-programmer/Snake-Game.git
   ```

2. Open the `index.html` file in your web browser.

3. Use the arrow keys to control the snake and enjoy the game!

## Code Structure

The codebase is organized into several key components:

- **Event Listeners:** Capture keyboard input to control the snake and prevent default scrolling.

- **Canvas Setup:** Initialize the HTML canvas and context for rendering the game.

- **Game Parameters:** Define constants such as colors, unit size, and initial snake positions.

- **Game State Variables:** Manage variables for the game state, including running status, velocity, food positions, score, and the snake array.

- **Game Initialization:** Start the game with the `gameStart` function, initializing the state, creating food, and beginning the game loop.

- **Game Loop:** The `nextTick` function represents the game loop, updating the state, drawing on the canvas, and checking for game over conditions at regular intervals.

- **Functions for Drawing and Updating:** Various functions handle specific aspects, such as drawing elements, handling input, checking game over conditions, and resetting the game.

## Contributing

If you'd like to contribute to the project, feel free to submit pull requests or raise issues. Your contributions are highly appreciated!

## License

This project is licensed under the [MIT License](LICENSE).