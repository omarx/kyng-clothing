import {Routes, Route} from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import {ProductsProvider} from "./contexts/products.context";

const App=()=> {
  return (
    <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
            <Route path={'/sign-in'} element={<Authentication/>}/>
            <Route path={'/shop'} element={<Shop/>}/>
        </Route>
   </Routes>
  );
}

export default App;
