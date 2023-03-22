import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Search = () => {
  return (
    <div>
      <Box
        component="form"
        noValidate
        sx={{ width: 500 }}
      >
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <Button variant="contained">Search</Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Search;