import {ProductCardContainer,ProductImage,ProductFooter,ProductName,ProductPrice} from "./product-card.styles";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import './product-card.styles'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const ProductCard=({product})=>{
    const {name,price,imageUrl}=product;
    const {addItemToCart}=useContext(CartContext);

    const addProductToCart=()=>addItemToCart(product)
    return(
        <ProductCardContainer>
        <ProductImage src={imageUrl} alt={name}/>
        <ProductFooter>
            <ProductName as={`span`}>{name}</ProductName>
                <ProductPrice as={`span`}>${price}
                </ProductPrice>
        </ProductFooter>
            {/*using addProductToCart() will cause infinite loop because it is expecting receive data*/}
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to cart</Button>
    </ProductCardContainer>)
}
export default ProductCard;