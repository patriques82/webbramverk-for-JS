const http = require("http");
const socketIO = require("socket.io")

const server = http.createServer();
const io = socketIO(server, {
  cors: {
    origin: "*"
  }
})

const PORT = 3001;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"

io.on("connection", (socket) => {
  // Join room
  const { roomId } = socket.handshake.query;
  socket.join(roomId)

  // Listen for messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, message)
  })

  // Leave room
  socket.on("disconnect", () => {
    socket.leave(roomId)
  })
})

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
})
