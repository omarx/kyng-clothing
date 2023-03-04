import {
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer,
  Total,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartCount,
} from "../../store/cart/cart.selector";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems),
    cartTotal = useSelector(selectCartCount);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: {cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
