import ReactDOM from 'react-dom/client';
import App from "./App";
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

/* Rätt sätt att göra rerender (setCounter meddelar när rerender ska göras)
const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  return <h1>{counter}</h1>
}
*/

/* Fel sätt att göra rerender
 
let counter = 0;

const App = ({ counter }) => {
  return <h1>{counter}</h1>
}

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

setInterval(() => {
  counter += 1;
  refresh();
}, 1000)

*/
