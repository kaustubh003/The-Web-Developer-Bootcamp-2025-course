import "./App.css";
import Chicken from "./Chicken";
import Die from "./Die";
import Greeter from "./Greeter";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import TogglerCounter from "./ToggleCounter";
import ColorBoxes from "./ColorBoxes";

// const data = [
//   { id: 1, item: "veggies", quantity: 12, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "mushroom", quantity: 4, completed: false },
//   { id: 4, item: "carrots", quantity: 6, completed: true },
// ];

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <div>
      <ColorBoxes
        colors={[
          "#85778f",
          "#072ab0",
          "#000850",
          "#45796e",
          "#c9b466",
          "#66d8a4",
          "#3fd25b",
          "#58f797",
          "#7602a2",
          "#23a20c",
          "#f18ea9",
          "#81701f",
        ]}
      />
      {/* <TogglerCounter /> */}
      {/* <Counter/> */}
      {/* <Form/>
      <Clicker message="Please dont click" text="Do not click"/> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Slots value1="d" value2="d" value3="d" /> */}
      {/* <Heading color="magenta" text="welcome!" fontSize="20px" />
      <Heading color="teal" text="blah" fontSize="40px" />
      
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey"]} /> */}
      {/* <ListPicker values={[1,2,3]} />
      <ListPicker values={["a", "b", "c"]} /> 
      <Greeter person="Bill" from="Colt"/>
      <Greeter person="Ted" />
      <Greeter  from="Elton" />
      <Die numSides={20}/>
      <Die />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;
