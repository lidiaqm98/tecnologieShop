import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
   //const [cantidad, setCantidad] = useState(1)

    const buyProducts = (product) => {
        const productExiste = cart.find((Element) => Element.id === product.id)
        if (!productExiste) {
            setCart([...cart, 
                    {id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    image: product.image,
                    cnt: 1}])
        } else {
            aumentarCantidad(product.id, 'mas')
        }
    }

    const aumentarCantidad = (idProducto, tipo)=>{
        const cartNew = cart.map(item=>{
            if(item.id===idProducto) {
                if (tipo==='mas')
                    {return {...item, cnt: item.cnt + 1};}
                else 
                    {return {...item, cnt: item.cnt===1? 1 : item.cnt - 1};}
            }
            return item;
        })
        setCart(cartNew);
    }

    return (
        <Context.Provider value={{ cart, setCart, buyProducts, aumentarCantidad}}>
            {children}
        </Context.Provider>
    )

}

//export default ContextProvider