import { useState } from 'react';
import { sculptureList } from './data.js';

// Hemläxa: Gör en miniräknare
const App = () => {
  return (
    <div className="container">
      <input className="input" type="text"></input>
      <p className="output"></p>
      <div className="digits">
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div>
          <button>0</button>
        </div>
      </div>
      <div className="controls">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </div>
  )
}

/* 
const GuestList = () => {

  const [allowedGuests, setAllowedGuests] = useState(
    [
      { name: "Matilda", present: false },
      { name: "Sandor", present: false },
      { name: "Kalle", present: false },
      { name: "Ulrika", present: false }
    ]
  )

  // TODO
  // 1. Kolla att personen finns i gästlistan
  // 2. Rendera incheckade gäster / oincheckade gäster
  // 3. Lägg till statehook. Ändra state när gäst finns i listan

  const checkGuest = () => {
    const name = prompt("Gästnamn");
    const index = allowedGuests.findIndex(guest => guest.name === name);
    if (index > -1) {
      const newlist = [...allowedGuests];
      newlist[index].present = true;
      setAllowedGuests(newlist)
    }
  }

  return (
    <div>
      <button onClick={checkGuest}>Login guest</button>
      <h4>Present guests</h4>
      <ul>
        {allowedGuests
          .filter(guest => guest.present)
          .map((guest, index) => <li key={index}>{guest.name}</li>)
        }
      </ul>
      <h4>Not present guests</h4>
      <ul>
        {allowedGuests
          .filter(guest => !guest.present)
          .map((guest, index) => <li key={index}>{guest.name}</li>)
        }
      </ul>
    </div>
  )

}
*/

/* Sculpture Gallery 

const Details = ({ description }) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide" : "Show"} details
      </button>
      <p>
        {showDetails ? description : ""}
      </p>
    </div>
  )
}

const Sculpture = ({ name, artist, index, size, url, alt }) => {
  return (
    <>
      <h2>
        <i>{name} </i>
        by {artist}
      </h2>
      <h3>
        ({index} of {size})
      </h3>
      <img
        src={url}
        alt={alt}
      />
    </>
  )
}

function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    const i = index === sculptureList.length - 1 ? 0 : index + 1;
    setIndex(i);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <Sculpture
        name={sculpture.name}
        artist={sculpture.artist}
        index={index + 1}
        size={sculptureList.length}
        url={sculpture.url}
        alt={sculpture.alt}
      />
      <Details description={sculpture.description} />
    </>
  );
}

const App = () => {
  return (
    <>
      <Gallery />
      <Gallery />
    </>
  )
}

*/


/* Traffic light

const Lamp = ({ highlighted, color }) => {
  return (
    <div
      style={{ backgroundColor: color, width: "100px" }}
      className={highlighted ? "on" : "off"}
    >
      {color}
    </div>
  )
}

const App = () => {
  const [color, setColor] = useState("red");

  const clickHandler = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else {
      setColor("red");
    }
  }
  return (
    <div>
      <Lamp highlighted={color === "red"} color="Red" />
      <Lamp highlighted={color === "yellow"} color="Yellow" />
      <Lamp highlighted={color === "green"} color="Green" />
      <button onClick={clickHandler}>next</button>
    </div>
  )
}
*/

/*
const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  )
}
*/

export default App;