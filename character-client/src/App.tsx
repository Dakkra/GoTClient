import React, { useState } from 'react';
import './App.css';
import { Card, TextField, Typography } from '@mui/material';

interface Character{
  name: string,
  born: string, 
  aliases: string[],
  titles: string[]
}

function App() {

  const [characterDetails, setCharacterDetails] = useState<Character>();

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value !== undefined && value !== ""){
      const request = "https://www.anapioficeandfire.com/api/characters?name=" + encodeURIComponent(value);
      const result = await (await fetch(request)).json();
  
      setCharacterDetails(result[0] as Character);
    }
  };

  return (
    <div className="App">
        <TextField fullWidth label="Character Name" onChange={handleInputChange}></TextField>
        <Card>
        <Typography>Name: {characterDetails?.name}</Typography>
        <Typography>Born: {characterDetails?.born}</Typography>
        <Typography>Titles: {characterDetails?.titles.map(e => `${e}, `)}</Typography>
        <Typography>Aliases: {characterDetails?.aliases.map(e => `${e}, `)}</Typography>
        </Card>
    </div>
  );
}

export default App;
