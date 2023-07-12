import { createContext,useState } from "react";

export const cartContext = createContext();

export const CartProvider =({children})=>{

    const [cartItems , setCartItems] = useState([]);

    const addToCart =(item)=>{
        setCartItems(previousCart=>[item,...previousCart])
    }

    return <cartContext.Provider value={{ cartItems, addToCart }}>
                {children}
           </cartContext.Provider>

}