import { useParams } from "react-router-dom"
import useChat from "./useChat"
import { useState } from "react"

const ChatRoom = () => {
  const [newMessage, setNewMessage] = useState("");
  const roomId = useParams().roomid;
  const { messages, sendMessage } = useChat(roomId);

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>

      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => {
            <li
              key={i}
              className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
            >
              {message.senderId}: {message.body}
            </li>
          })}
        </ol>
      </div>

      <textarea
        value={newMessage}
        placeholder="write message..."
        className="new-message-input-field"
        onChange={(e) => setNewMessage(e.target.value)}
      />

      <button
        className="send-message-button"
        onClick={() => sendMessage(newMessage)}
      >
        Send
      </button>

    </div>
  )
}

export default ChatRoom