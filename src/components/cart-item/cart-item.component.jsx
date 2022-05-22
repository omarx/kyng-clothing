import {CartItemContainer,CartImg,CartItemDetails} from "./cart-item.styles";

const CartItem=({cartItem:{name,imageUrl,price,quantity}})=>{
    return(
        <CartItemContainer>
            <CartImg src={imageUrl} alt={name} />
            <CartItemDetails>
                <span>{name}</span>
                <span>{quantity} x ${price}
                </span>
            </CartItemDetails>
        </CartItemContainer>)
}
export default CartItem;
