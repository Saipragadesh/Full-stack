const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on('disconnect', (reason) => {
    console.log(`Socket disconnected: ${socket.id} (${reason})`);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log('Socket.io ready for real-time connections');
});
