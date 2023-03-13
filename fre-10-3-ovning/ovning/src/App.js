import { useEffect, useState } from "react";

/* Repetition
function App() {

  const [trigger, setTrigger] = useState({})

  // Övningar
  //1. Gör en effekt som loggar "hej" varje gång App renderas
  //2. Gör samma effekt som loggar "hej" vid första rendering
  //3. Lägga till knapp ("trigger"). När man trycker på den så ska effekten köra

  // 1
  useEffect(() => {
    console.log("hej 1");
  })

  // 2
  useEffect(() => {
    console.log("hej 2");
  }, [])

  // 3
  useEffect(() => {
    console.log("trigger");
  }, [trigger])

  console.log("render log");

  return (
    <div className="App">
      Hello
      <button onClick={() => setTrigger({})}>trigger</button>
    </div>
  );
}
*/

// Väder app
/*
Göteborgs väder kommande 24 h
https://www.7timer.info/bin/astro.php?lon=11.9865&lat=57.696991&ac=0&unit=metric&output=json

1. Visa "cloud cover" data över 24 h i en <ul>
2. Gör en knapp som istället visar "transparancy" över 24 h
3. Gör en knapp som visar "cloud cover" över 24 h
4. Refactorera
5. Läxa: Skriv tester för CloudCover och Transparency
6: Läxa (lite tuffare): Test för att knapp trycks
*/

const CloudCover = ({ data, viewChange }) => {
  return <Wrapper>
    <button onClick={viewChange}>Transparency</button>
    <ul>
      {data.map(({ timepoint, cloudcover }) => (
        <li key={timepoint}>
          <p>Time: {timepoint}</p>
          <p>CloudCover: {cloudcover}</p>
        </li>
      ))}
    </ul>
  </Wrapper>
}

const Transparency = ({ data, viewChange }) => {
  return <Wrapper>
    <button onClick={viewChange}>Cloud cover</button>
    <ul>
      {data.map(({ timepoint, transparency }) => (
        <li key={timepoint}>
          <p>Time: {timepoint}</p>
          <p>Transparency: {transparency}</p>
        </li>
      ))}
    </ul>
  </Wrapper>
}

const Wrapper = (props) => {
  return (
    <div>
      <h1>Weather appen</h1>
      {props.children}
    </div>
  )
}

const App = () => {
  const [dataseries, setDataseries] = useState([])
  const [view, setView] = useState("CLOUDCOVER")

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("https://www.7timer.info/bin/astro.php?lon=11.9865&lat=57.696991&ac=0&unit=metric&output=json")
      const data = await resp.json()
      const dataseries = data.dataseries.map(({ timepoint, cloudcover, transparency }) => {
        return { timepoint, cloudcover, transparency }
      })
      setDataseries(dataseries);
    }
    getData()
  }, [])

  switch (view) {
    case "CLOUDCOVER":
      return <CloudCover data={dataseries} viewChange={() => setView("TRANSPARENCY")} />
    default: // TRANSPARENCY
      return <Transparency data={dataseries} viewChange={() => setView("CLOUDCOVER")} />
  }
}

export { Wrapper, Transparency, CloudCover };
export default App;
