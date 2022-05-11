import {useState, createContext, useEffect} from "react";

// Have some understand of useContext cart is a bit complicated
const addCartItem=(cartItems,productToAdd)=>{

    const existingCartItem= cartItems.find(
        (cartItem)=>cartItem.id===productToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
        return [...cartItems,{...productToAdd, quantity:1}];

}
const removeCartItem=(cartItems,productToRemove)=>{

    const existingCartItem= cartItems.find(
        cartItem=>cartItem.id ===productToRemove.id
    )

    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!== productToRemove.id);
    }
    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? {...cartItem, quantity: cartItem.quantity-1}
            : cartItem
    )
}
const removeItem=(cartItems,itemToRemove)=>{
    return cartItems.filter(cartItem=>cartItem.id!==itemToRemove.id)
}


export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems: [],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    removeItems:()=>{},
    cartCount:0,
    cartTotal:0,
})
export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    let [cartCount,setCartCount]=useState(0);
    let [cartTotal,setCartTotal]=useState(0);
    useEffect(()=>{
        const newCartCount= cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount);
    },[cartItems])

    useEffect(()=>{
        const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.price*cartItem.quantity,0)
        setCartTotal(newCartTotal)
    },[cartItems])

    const addItemToCart = (productToAdd)=> {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItem(cartItems,productToRemove))
    }
   const removeItems=(itemToRemove)=>{
        setCartItems(removeItem(cartItems,itemToRemove))
   }
    const value={isCartOpen,setIsCartOpen,
        addItemToCart,removeItemFromCart,removeItems,cartItems,cartCount,cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
