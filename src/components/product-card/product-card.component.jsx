import './product-card.styles.scss';
import Button from "../button/button.component";
import './product-card.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const ProductCard=({product})=>{
    const {name,price,imageUrl}=product;
    const {addItemToCart}=useContext(CartContext);

    const addProductToCart=()=>addItemToCart(product)
    return(
        <div className={'product-card-container'}>
        <img src={imageUrl} alt={name}/>
        <div className={'footer'}>
            <span className={'name'}>{name}</span>
                <span className={'price'}>${price}
                </span>

        </div>
            {/*using addProductToCart() will cause infinite loop because it is expecting receive data*/}
        <Button buttonType={'inverted'} onClick={addProductToCart} >Add to cart</Button>
    </div>)

}
export default ProductCard;