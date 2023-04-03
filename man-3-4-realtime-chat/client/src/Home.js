import { Link } from "react-router-dom"
import { useState } from "react"

const Home = () => {
  const [roomName, setRoomName] = useState("")

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="room"
        onChange={(e) => setRoomName(e.target.value)}
        className="text-input-field"
      />
      <Link
        to={`/${roomName}`}
        className="enter-room-button"
      >
        Join Room
      </Link>
    </div>
  )
}

export default Home