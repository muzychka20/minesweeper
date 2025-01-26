# Minesweeper Game

A fully interactive Minesweeper game implemented in JavaScript, HTML, and CSS. This repository contains the core logic for the game, along with an intuitive user interface for desktop and mobile devices. The game allows users to configure the board size and number of mines, providing a customizable experience.

<img width="1727" alt="img" src="https://github.com/user-attachments/assets/cfcdfa19-3dbe-469e-ba4f-28b5e6bbfa5f" />

## Features

- **Dynamic Board Creation**: Generate a board of any size with a user-defined number of mines.
- **First Click Guarantee**: The first cell clicked is always safe.
- **Flagging and Unflagging**: Mark suspected mines with flags.
- **Victory and Loss Detection**: Alerts the user when they win or lose the game.
- **Responsive Design**: Supports both mouse and touch inputs (including long-press for mobile flagging).
- **Timer and Mines Counter**: Tracks the game duration and remaining mines.

## How to Run

1. Clone this repository   
2. Open the `index.html` file in your web browser to start the game

## How to Play

1. Set the desired width, height, and number of mines using the input fields.
2. Left-click a cell to open it:
   - If it’s a mine, the game ends.
   - If it’s empty, adjacent cells will open automatically.
   - If it contains a number, it shows how many mines are nearby.
3. Right-click (or long-press on mobile) a cell to flag or unflag it.
4. Win the game by opening all non-mine cells.

## Mobile Support
- Long-press on a cell to flag it.
- Cancel the flagging action by moving your finger before releasing.

Enjoy playing Minesweeper!
