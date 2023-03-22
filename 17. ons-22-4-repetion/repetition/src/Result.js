import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

const Result = () => {
  const pokemons = useSelector(state => state);

  return (
    <ul>
      {pokemons.map(pokemon => (
        <li>
          <Link to={`/pokemon/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Result;