import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import LikeButton from './LikeButton'
import ToggleMessage from './ToggleMessage'
import Greeting from './Greeting'
import LoginPanel from './LoginPanel'
import Cart from './Cart'
import Discount from './Discount'
import ProductList from './ProductList'
import TodoList from './TodoList'
import Bootstrapexample from './Bootstrap/Bootstrapexample'
import { Dropdown } from 'bootstrap'
import DropdownButton from './Component/DropdownButton'
import RadioButton from './Component/RadioButton'
import Checkbox from './Component/Checkbox'
import Memo from './Component/ReactMemo.jsx/MemoChild'
import MemoParent from './Component/ReactMemo.jsx/MemoParent'
import HooksDemo from './Hooks/HooksDemo'

function App() {
  const [count, setCount] = useState(0)
{/* <select name="cars" id="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
</select> */
const country = [
  {id:1,name:"NewZealand"},
  {id:2,name:"Australia"},
  
];
const city = [
  {id:1,name:"Christchurch"},
  {id:2,name:"Canberra"},
  
];


const [gender, setGender] = useState("");

const Gender = [
  {id:1,gender:"Male"},
  {id:2,gender:"Female"},
]
  

const [skills, setSkills] = useState(false);
const Language = [
  {id: 1, skill: "HTML" },
  { id: 2, skill: "CSS" },
  { id: 3, skill: "JavaScript" },

]

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

    return (
    <>
    {/* <Product name="NB9060"price="$250"category="Shoes"/>
    <LikeButton/>
    <ToggleMessage/>
    <Greeting/>
    <LoginPanel/>
    <Cart/> 
   <Discount/>
   <ProductList/>
   <TodoList/> */}
   <Bootstrapexample/><br></br>
   <DropdownButton label="Country" name="country" options={country} ></DropdownButton>
   <DropdownButton label="City" name="city" options={city} ></DropdownButton><br></br>
  <RadioButton  label="Gender" options={Gender} value={gender} onChange={setGender} />
   <Checkbox label="Language skills"  options={Language} value={skills} onChange={setSkills} /> 
   <MemoParent/>   
   <HooksDemo />
    </>
  )
}
}
export default App;
