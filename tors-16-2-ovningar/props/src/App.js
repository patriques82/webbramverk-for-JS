const Car = (props) => {
  const { name, year, color, pic } = props.car;
  return (
    <div style={{ color }} >
      <p>{name}</p>
      <p>{year}</p>
      <img src={pic} />
    </div>
  )
}

const Garage = (props) => {
  const cars = props.cars;
  return (
    <div>
      {cars.map(car => <Car car={car} />)}
    </div>
  )
}

// TODO
// 3. skicka med bild
const App = () => {
  const cars = [
    {
      name: "BMW",
      year: 1999,
      color: "red",
      pic: "https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg"
    },
    {
      name: "Mercedes",
      year: 2000,
      color: "green",
      pic: "https://www.codingexercises.com/img/2022-01-25/002-mercedes-gray.jpg"
    },
    {
      name: "Toyota",
      year: 2020,
      color: "purple",
      pic: "https://www.codingexercises.com/img/2022-01-25/003-toyota-gray.jpg"
    },
    {
      name: "Alpha Romeo",
      year: 2001,
      color: "blue",
      pic: "https://www.codingexercises.com/img/2022-01-25/004-alpha-romeo-red.jpg"
    }
  ]
  return (
    <div className="App">
      <Garage cars={cars} />
    </div>
  );
}

export default App;
