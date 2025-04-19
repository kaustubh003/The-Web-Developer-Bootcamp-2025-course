import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Slider, Box } from "@mui/material";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(0);
  return (
    <Box sx={{border: "1px solid red", p: 6}}>
      <h1>Name is: {name}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Fido"
        label="Puppy Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Volume: {volume}</h2>
      <Slider
        aria-label="Volume"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </Box>
  );
}
