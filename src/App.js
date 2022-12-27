import './App.css';
import Navbar from "./Component/Navbar";
import { Route,Routes} from "react-router-dom";
import Home from "./Component/Home";

import Cart from "./Component/Cart";
import Error from "./Component/Error";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allcategories from './Component/Allcategories';
function App() {
  return (
    <div>
    <Navbar />
    <ToastContainer/>
 <Routes>
 <Route path="/" exact element={<Home />} />

 <Route path="/cart" exact element={<Cart />} />
 <Route path="/cart" exact element={<Cart />} />
 <Route path="/Allcategories"  element={<Allcategories />} />


 <Route path="*"  element={<Error />} />
 
 </Routes>
    
</div>
  );
}

export default App;
