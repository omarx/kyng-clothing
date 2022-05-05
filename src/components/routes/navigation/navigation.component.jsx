import {Fragment,useContext} from "react";
import {Outlet,Link} from "react-router-dom";
import './navigation.styles.scss';
import {ReactComponent as KyngLogo} from '../../../assets/kyng.svg';
import {UsersContext} from "../../../contexts/users.context";

const Navigation=()=>{
    const {currentUser}=useContext(UsersContext);
    console.log(currentUser);
  return (
      <Fragment>
          <div className={`navigation`}>
              <Link className={'logo-container'} to={'/'}> <KyngLogo className={'logo'} /></Link>
              <div className={`nav-links-container`}>
                  <Link className={'nav-link'} to={'/shop'}>
                      SHOP
                  </Link>
                  <Link className={'nav-link'} to={'/sign-in'}>
                      SIGN IN
                  </Link>

              </div>

          </div>
          <Outlet/>
      </Fragment>
  )

}

export default Navigation;