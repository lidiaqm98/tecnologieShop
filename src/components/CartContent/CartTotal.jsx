import { useContext} from 'react'
import {Context}  from '../../Context/Context';

const CartTotal = () => {
    const {cart}=useContext(Context)
    if (!cart) <p>No hay elementos en el carrito</p>

    const total= cart.reduce((acc, el)=>
     acc + el.precio * el.cnt, 0)
  return (
    <div className='cartTotal'>
       <h3> Total a Pagar: {total}</h3>
    </div>
  )
}

export default CartTotal