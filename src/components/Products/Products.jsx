import './Products.css'
import {useState, useEffect, useContext} from 'react'
import { Context } from '../../Context/Context';

function Products() {
  const [products, setProducts] = useState ([])  
  const {buyProducts} = useContext(Context)
  
  useEffect(()=>{
        const fetchProductos=async()=>{
            try {
                const response = await fetch("https://api-ten-jet.vercel.app/products");
                if(!response.ok){
                    throw new Error("Error al cargar los productos");
                }
                const data=await response.json();
                setProducts(data)
            } catch (err) {
                setError(err.message);
            }
        }
        fetchProductos();
    }, []  );

    /* const byProducts = (product)=> {       
        setCart([...cart, product])
    } */

    return products.map((product)=>{
        return (
            <div className='card' key={product.id}>
                <img src={product.image} alt='img-product-cart' />
                <h3>{product.nombre}</h3>
                <h4>{product.precio}</h4>
                <button onClick={()=>buyProducts(product)}>buy</button>
            </div>
        )
    })
  

}

export default Products