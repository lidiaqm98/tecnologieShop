import { useContext} from 'react'
import {Context}  from '../../Context/Context';


const CartItemCounter = ({product}) => {
    const {cart, setCart, buyProducts, aumentarCantidad}=useContext(Context)   
   //console.log('cart',cart);
   // 
   // console.log('product',product)
  return (
    <>
        <p className="counter-button" onClick={()=>aumentarCantidad(product.id, 'menos')}>  -  </p>
        <p>  {product.cnt}  </p>
        <p className="counter-button" onClick={()=>aumentarCantidad(product.id, 'mas')}>  +  </p>
    </>
  )
}

export default CartItemCounter