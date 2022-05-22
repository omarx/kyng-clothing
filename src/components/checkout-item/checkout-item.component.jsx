import {CheckoutItemContainer,
    ImageContainer,
    BaseSpan,CheckoutQuantity,
    Arrow,Value,RemoveButton} from "./checkout-item.styles";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CheckoutItem=({cartItem})=>{
    const {removeItems,addItemToCart,removeItemFromCart}=useContext(CartContext)
    const {name,imageUrl,price,quantity}=cartItem;
    return(
        <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name}/>
        </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <CheckoutQuantity>
            <Arrow onClick={()=>removeItemFromCart(cartItem)}>&#10094;</Arrow>
            <Value> {quantity}</Value>
            <Arrow onClick={()=>addItemToCart(cartItem)}>&#10095;</Arrow>
            </CheckoutQuantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={()=>removeItems(cartItem)}> &#10005;</RemoveButton>
        </CheckoutItemContainer>)

}
export default CheckoutItem;