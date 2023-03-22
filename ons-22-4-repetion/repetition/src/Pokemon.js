import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/icons-material/Badge';
import AssistWalker from '@mui/icons-material/AssistWalker';
import Scale from '@mui/icons-material/Scale';
import Height from '@mui/icons-material/Height';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import CircularProgress from '@mui/material/CircularProgress';

const DisplayPokemon = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprites.front_default} />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Badge />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={pokemon.name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AssistWalker />
            </Avatar>
          </ListItemAvatar>
          {pokemon.abilities.map(ab => <ListItemText primary={ab.ability.name} />)}
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Scale />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={pokemon.weight} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Height />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={pokemon.height} />
        </ListItem>
        <FitnessCenter />
        <ul>
          {pokemon.moves.map(m => <li>{m.move.name}</li>)}
        </ul>
      </List>
    </div >
  )
}

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const name = useParams().name;

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
      console.log(data);
    }
    fetchPokemon();
  }, [])

  if (pokemon) {
    return <DisplayPokemon pokemon={pokemon} />
  } else {
    return <CircularProgress />
  }
}

export default Pokemon;