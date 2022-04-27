import Home from "./components/routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
const App=()=> {
  return (
    <Routes>
        <Route path={'/'}  element={<Navigation/>}/>
      <Route index  element={<Home/>}/>

   </Routes>
  );
}

export default App;
