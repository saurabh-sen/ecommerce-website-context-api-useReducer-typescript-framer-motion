import { createContext, useContext, useReducer, useState } from "react";
import { product } from "./product";
import { cartReducer, prodReducer } from "./Reducer";

export const cartContext = createContext<any>([]);

const Context = ({ children} : any) => {
    
    const [state, dispatch] = useReducer(cartReducer, {
        product: product,
        cart: [],
    });

    const [prodState, prodDispatch] = useReducer(prodReducer, {
        byFastDelivery: false,
        byStock: false,
        byRating: 0,
        bySearchQuery: "",
    })

    return (
        <cartContext.Provider value={{ state, dispatch, prodState, prodDispatch }}>
            {children}
        </cartContext.Provider>
    );
};

export default Context;

export const cartState = () => {
    return useContext(cartContext);
} 