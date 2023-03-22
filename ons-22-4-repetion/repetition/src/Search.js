import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { addPokemons } from './reducers/pokemonsReducer';

const Search = () => {
  const [inputText, setInputText] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000`);
    const data = await res.json();
    const found = data.results.filter(p => p.name.startsWith(inputText))
    dispatch(addPokemons(found))
    navigate("/result")
  }

  return (
    <Box
      component="form"
      noValidate
      sx={{ width: 500 }}
      onSubmit={submitHandler}
    >
      <Stack spacing={1}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={e => setInputText(e.target.value)}
        />
        <Button type="submit" variant="contained">Search</Button>
      </Stack>
    </Box>
  )
}

export default Search;