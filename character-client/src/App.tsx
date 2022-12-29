import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Autocomplete, Card, TextField } from '@mui/material';

function App() {

  const [data, setData] = useState("");
  const [autoOptions, setAutoOptions] = useState<Array<string>>(["John", "Chris"]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <div className="App">
        <Autocomplete fullWidth freeSolo options={autoOptions} renderInput={(params) => <TextField {...params} label="Character Search" onChange={handleInputChange} />}></Autocomplete>
        <Card>{data}</Card>
    </div>
  );
}

export default App;
