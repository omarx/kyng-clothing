import {Fragment,useContext} from "react";
import {Outlet} from "react-router-dom";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles';
import {ReactComponent as KyngLogo} from '../../assets/kyng.svg';
import {UsersContext} from "../../contexts/users.context";
import {CartContext} from "../../contexts/cart.context";
import {signOutUser} from "../../utils/firebase.utils";
import swal from 'sweetalert'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation=()=>{
    const {currentUser}=useContext(UsersContext);
    const {isCartOpen}=useContext(CartContext)
  return (
      <Fragment>
          <NavigationContainer>
              <LogoContainer className={'logo-container'} to={'/'}> <KyngLogo className={'logo'} /></LogoContainer>
              <NavLinks className={`nav-links-container`}>
                  <NavLink className={'nav-link'} to={'/shop'}>
                      SHOP
                  </NavLink>
                  {
                      currentUser?(
                          <NavLink as='span' className={'nav-link'} onClick={()=>{
                              signOutUser()
                              swal({title: "Success", text: "You have been logged out", icon: "success",timer:3000})
                          }}>SIGN OUT</NavLink>
                      ):(<NavLink className={'nav-link'} to={'/sign-in'}>SIGN IN</NavLink>)}
                  <CartIcon/>
                      {isCartOpen && <CartDropdown/>}
              </NavLinks>
      </NavigationContainer>
          <Outlet/>
      </Fragment>
  )
}

export default Navigation;