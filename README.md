# Socket.io Full-Stack Demo

This repository contains a minimal full-stack project demonstrating Socket.io integration between an Express backend and a React frontend.

## Setup

1. Install dependencies:
   ```bash
   npm install --workspaces
   ```

2. Start the backend server:
   ```bash
   npm --workspace server run dev
   ```

3. Start the frontend app:
   ```bash
   npm --workspace client run dev
   ```

## Features

- `server/server.js` uses `http.createServer(app)` and attaches Socket.io to the server.
- Socket.io is configured with CORS to allow client connections from `http://localhost:5173`.
- Connection and disconnect events are logged to the backend terminal.
- `client/src/services/socket.js` exports a single Socket.io instance with `autoConnect: false`.
- `client/src/pages/Dashboard.jsx` connects the socket on mount, listens for `connect`, `disconnect`, and `connect_error`, and cleans up listeners on unmount.
- The `/api/health` endpoint remains functional.
