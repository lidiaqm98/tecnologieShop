import Navbar from "../Navbar/Navbar"
import CartElements from "./CartElements";
import './CartContent.css'
import CartTotal from "./CartTotal";

const CartContent = () => {  
  return (
    <>
    <Navbar />
    <CartElements />   
    <CartTotal /> 
    </>
    
  )
}

export default CartContent