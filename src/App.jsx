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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Product name="NB9060"price="$250"category="Shoes"/>
    <LikeButton/>
    <ToggleMessage/>
    <Greeting/>
    <LoginPanel/>
   {/* <Cart/> */}
   <Discount/>
    </>
  )
}

export default App;
