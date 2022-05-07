import {Fragment,useContext} from "react";
import {Outlet,Link} from "react-router-dom";
import './navigation.styles.scss';
import {ReactComponent as KyngLogo} from '../../../assets/kyng.svg';
import {UsersContext} from "../../../contexts/users.context";
import {CartContext} from "../../../contexts/cart-item.context";
import {signOutUser} from "../../../utils/firebase.utils";
import swal from 'sweetalert'
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";


const Navigation=()=>{
    const {currentUser}=useContext(UsersContext);
    const {isCartOpen}=useContext(CartContext)
  return (
      <Fragment>
          <div className={`navigation`}>
              <Link className={'logo-container'} to={'/'}> <KyngLogo className={'logo'} /></Link>
              <div className={`nav-links-container`}>
                  <Link className={'nav-link'} to={'/shop'}>
                      SHOP
                  </Link>
                  {
                      currentUser?(
                          <span className={'nav-link'} onClick={()=>{
                              signOutUser()
                              swal({title: "Success", text: "You have been logged out", icon: "success",timer:3000})
                          }}>SIGN OUT</span>
                      ):(<Link className={'nav-link'} to={'/sign-in'}>
                          SIGN IN
                      </Link>)
                  }
                  <CartIcon/>
                  <div>
                      {isCartOpen && <CartDropdown/>}
                  </div>
              </div>

          </div>
          <Outlet/>
      </Fragment>
  )

}

export default Navigation;