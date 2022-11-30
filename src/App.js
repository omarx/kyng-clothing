import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import { useEffect } from "react";
import Checkout from "./routes/checkout/checkout.component";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./store/user/user.selector";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      user === ""
        ? createUserDocumentFromAuth(user)
        : dispatch(setCurrentUser(user));
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {currentUser ? (
          <Route path={"/sign-in"} element={<Navigate to="/" replace />} />
        ) : (
          <Route path={"/sign-in"} element={<Authentication />} />
        )}
        <Route path={"/shop/*"} element={<Shop />} />
        <Route path={"/checkout"} element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
