import { useContext } from 'react'
import { Context } from '../../Context/Context';
import CartItemCounter from './CartItemCounter';

const CartElements = () => {
    const { cart, setCart } = useContext(Context)

    const deleteProduct = (id) => {
        const foundId = cart.find(
            (Element) => Element.id === id)
        const newCart = cart.filter((Element) => {
            return Element !== foundId
        })

        setCart(newCart)
    }
    if (!Array.isArray(cart) || cart.length === 0) {
        return <p>El carrito está vacío 🛒</p>;
    }

    return cart.map((product) => {
        //console.log(product)
        return (
            <div key={product.id} className='product-card-container'>
                <img src={product.image} alt="product-card" />
                <h3>{product.nombre}</h3>
                <CartItemCounter product={product} />
                <h4>{product.precio * product.cnt}</h4>
                <h3 className='cart-delete-product'
                    onClick={() => deleteProduct(product.id)}>
                    ❌
                </h3>
            </div>
        )
    })

}

export default CartElements