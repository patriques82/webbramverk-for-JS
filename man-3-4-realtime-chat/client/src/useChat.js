import { useState } from "react"
import socketIOClient from "socket.io-client";
import { useRef, useEffect } from "react"

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"
const SOCKET_SERVER_URL = "http://localhost:3001"

const useChat = (roomId) => {
  const [messages, setMessages] = useState([])
  const socketRef = useRef();

  useEffect(() => {

    // 1. Create connection to server
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId }
    })

    // 2. Subscribe to message (channel "newChatMessage")
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id
      }
      setMessages([...messages, incomingMessage])
    })

    // 3. Destroy the socket reference
    return () => {
      socketRef.current.disconnect();
    }
  }, [roomId]);

  // 4. Send to server via socket
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id
    })
  }

  return { messages, sendMessage }
}

export default useChat;