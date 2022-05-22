import {Routes, Route,Navigate} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import {useContext} from "react";
import {UsersContext} from "./contexts/users.context";
import Checkout from "./routes/checkout/checkout.component";


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
            <Route path={'/shop/*'} element={<Shop/>}/>
            <Route path={'/checkout'} element={<Checkout/>}/>
        </Route>
   </Routes>
  );
}

export default App;
