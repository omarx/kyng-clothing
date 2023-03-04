import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  CheckoutQuantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import {
  removeItems,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <CheckoutQuantity>
        <Arrow
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
        >
          &#10094;
        </Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
          &#10095;
        </Arrow>
      </CheckoutQuantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={() => dispatch(removeItems(cartItems, cartItem))}>
        {" "}
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
