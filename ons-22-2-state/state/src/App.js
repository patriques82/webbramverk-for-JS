import { useState } from 'react';
import { sculptureList } from './data.js';


// Hemläxa: Gör en miniräknare
const App = () => {
  const [calculation, setCalculation] = useState({
    firstNum: "",
    operator: "",
    secondNum: "",
    output: "",
  })

  const digitClick = (number) => {
    if (calculation.operator === "") {
      const firstNum = calculation.firstNum + String(number)
      setCalculation({ ...calculation, firstNum })
    } else {
      const secondNum = calculation.secondNum + String(number)
      setCalculation({ ...calculation, secondNum })
    }
  }

  const calculate = ({ firstNum, operator, secondNum }) => {
    switch (operator) {
      case '+':
        return Number(firstNum) + Number(secondNum);
      case '-':
        return Number(firstNum) - Number(secondNum);
      case '*':
        return Number(firstNum) * Number(secondNum);
      case '/':
        return Number(firstNum) / Number(secondNum);
    }
  }

  const controlClick = (control) => {
    switch (control) {
      case '+':
        setCalculation({ ...calculation, operator: '+' })
        break;
      case '-':
        setCalculation({ ...calculation, operator: '-' })
        break;
      case '*':
        setCalculation({ ...calculation, operator: '*' })
        break;
      case '/':
        setCalculation({ ...calculation, operator: '/' })
        break;
      default: // =
        setCalculation({
          firstNum: "",
          operator: "",
          secondNum: "",
          output: calculate(calculation)
        })
        break;
    }
  }

  const { firstNum, operator, secondNum, output } = calculation;

  return (
    <div className="container">
      <input
        readOnly
        className="input"
        value={firstNum + " " + operator + " " + secondNum}
      />
      <p className="output">{output}</p>
      <div className="digits">
        <div>
          <button onClick={() => digitClick(1)}>1</button>
          <button onClick={() => digitClick(2)}>2</button>
          <button onClick={() => digitClick(3)}>3</button>
        </div>
        <div>
          <button onClick={() => digitClick(4)}>4</button>
          <button onClick={() => digitClick(5)}>5</button>
          <button onClick={() => digitClick(6)}>6</button>
        </div>
        <div>
          <button onClick={() => digitClick(7)}>7</button>
          <button onClick={() => digitClick(8)}>8</button>
          <button onClick={() => digitClick(9)}>9</button>
        </div>
        <div>
          <button onClick={() => digitClick(0)}>0</button>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => controlClick('+')}>+</button>
        <button onClick={() => controlClick('-')}>-</button>
        <button onClick={() => controlClick('*')}>*</button>
        <button onClick={() => controlClick('/')}>/</button>
        <button onClick={() => controlClick('=')}>=</button>
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