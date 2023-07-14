import React from 'react';
import {useState} from 'react';
import House from './House.js';
import ReactDOM from 'react-dom/client';



const JSX = <h1>Wow! 5 + 5 is {5+5}.</h1>;

const myElement = (
    <div className = "practice">
        <h1>Only one top level element in JSX!</h1>
        <ul>
            <li>Diane</li>
            <li>Amir</li>
        </ul>        
    </div>

)

const x = 15;
let text = "less than 10";
if (x >= 10) text = "bigger than 10";
const ifElement = <h1>{text}</h1>

const ternary = <h1>{x >=0 ? "bigger than 10" : "smaller than 10"}</h1>

class Car extends React.Component{
    render(){
        return <p>I want a car!!</p>;
    }
}

// React components must be capitalized.
function MeCar() {
    return <h2>No one :/</h2>;
  }

const myElem = <Car brand = "Ford"/>;

function BrandPrint(props) {
  return <h2>This is a {props.brand} car.</h2>
}  

const carPropObj = {name : "Ford", model: "Mustang"};

function CarPropPrint(props) {
  return <h2>This is from {props.info.name}, model {props.info.model}.</h2>
}

function Garage() {
  return (
    <>
      <h1>Who lives in my empty Garage?</h1>
      <CarPropPrint info = {carPropObj} />
    </>
  );
}

let a = 1;

function PrintNth() {
  const point = function click(){
    alert(a + "th click.");
    a++;
  }
  return <button onClick = {point}>Cookieee</button>
}

function CookieClicker(props){
  return(
    <>
      <PrintNth/>
      {props.bored == 0 && <h1>You are bored!</h1>}
    </>
  ) 
}

function MathOrGame(props){
  if (props.option == 0) return <CookieClicker bored = "0"/>
  else return <h1>1+1 = 2</h1>
}

function GarageIter(){
  const cars = ['Ford', 'BMW'];
  return(
    <div>
      <h1>Flexing my cars.</h1>
      <ul>
        {cars.map((car) => <BrandPrint brand = {car}/>)}
      </ul>      
    </div>

  )
}

// keys will re-render only the updated items
function GarageKeyIter(){
  const cars = [
    {id : 1, brand : 'Ford'},
    {id : 2, brand : 'Audi'}
  ];
  return(
    <div>
      <h1>Welcome to my car collection.</h1>
      <ul>
        {cars.map((car) => <BrandPrint  key = {car.id} brand = {car.brand}/>)}
      </ul>      
    </div>

  )
}

function MyForm(){
  const [name, setName] = useState("");
  const change = function change(e){
    setName(e.target.value);    
  }
  const handleSubmit = () => alert("name changed.");
  
  return(
    <form onSubmit = {handleSubmit}>
      <label>Your name?
        <input
          type = "text"
          value = {name}
          onChange = {change}
        />
      </label>
      <input type = "submit" />
    </form>
  )
}

function MyMultiForm(){
  const [inputs, setInputs] = useState({});
  const multiChange = function multiChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name] : value})) 
  }
  const handleSubmit = () => alert("Info submitted.");
  
  return(
    <form onSubmit = {handleSubmit}>
      <label>Your name?
        <input
          type = "text"
          name = "username"
          value = {inputs.name}
          onChange = {multiChange}
        />
      </label>
      <label>Your age?
        <input
          type = "number"
          name = "age"
          value = {inputs.age}
          onChange = {multiChange}
        />
      </label>
      <input type = "submit" />
    </form>
  )
}

// wo/ onChange, content doesn't change even though we try to retype.
function MyText() {
  const [textarea, setTextarea] = useState("Write content here.");
  const handleChange = (event) => setTextarea(event.target.value);

  return(
    <form>
      <textarea value = {textarea} onChange = {handleChange}/>
    </form>
  )
}

function MySelect() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => setMyCar(event.target.value);

  const handleClick = () => alert(myCar + " is saved.");

  return(
    <form>
      <select value = {myCar} onChange = {handleChange}>
        <option value = "Ford">Ford</option>
        <option value = "Volvo">Volvo</option>
        <option value = "Fiat">Fiat</option>
      </select>
      <button onClick = {handleClick}>Choose</button>
    </form>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MySelect />);