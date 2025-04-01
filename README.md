# PlayTable
PlayTable is a gaming platform built with Next.js, Material-UI (MUI), and Zustand for state management. It allows users to play various games, track scores, and compete on a leaderboard. The backend uses JSON Server for mock data.

## Table of Contents
1. [📸 Demo](#-demo)
2. [🚀 Getting Started](#-getting-started)

## 📸 Demo
<div>
  <img src="https://github.com/e-khalifa/PlayTable/blob/main/demo/demo.gif">
</div>

## 🚀 Getting Started
### Prerequisites
- Install **Node.js** and **npm**.
- Clone the repository:
  ```sh
  git clone https://github.com/e-khalifa/PlayTable.git
  cd playtable
  ```

### Install Dependencies
```sh
npm install
```

### Run the Development Server
```sh
npm run dev
```
This will run the app on [http://localhost:3000](http://localhost:3000).

### Start the JSON Server
For mock user and game data:
```sh
npx json-server --watch users.json --port 5000
npx json-server --watch games.json --port 4000
```
This will serve users from `users.json` and games from `games.json`.

