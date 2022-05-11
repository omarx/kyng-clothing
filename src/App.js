import {Routes, Route,Navigate} from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import {useContext} from "react";
import {UsersContext} from "./contexts/users.context";
import Checkout from "./components/routes/checkout/checkout.component";


const App=()=> {
    const {currentUser}=useContext(UsersContext);
  return (
    <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
            {
                currentUser?<Route path={'/sign-in'} element={<Navigate to='/' replace/>}/>
                    : <Route path={'/sign-in'} element={<Authentication/>}/>
            }
            <Route path={'/shop'} element={<Shop/>}/>
            <Route path={'/checkout'} element={<Checkout/>}/>
        </Route>
   </Routes>
  );
}

export default App;
