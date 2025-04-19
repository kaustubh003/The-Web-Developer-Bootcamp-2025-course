import "./App.css";
import Button from "@mui/material/Button";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <FormDemo/>
      {/* <Button variant="contained" onClick={() => alert("Hi")}>Contained</Button>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" color="success">Outlined</Button> */}
    </div>
  );
}

export default App;
