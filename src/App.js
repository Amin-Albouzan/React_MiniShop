import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./Components/Cart";
import AdminNavbar from "./Components/AdminNavbar";
import AdminHome from "./Components/AdminHome";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";



function App() {
  return  <>

<Routes>
<Route path="/"  element={<>  <Navbar></Navbar><Home></Home></>}></Route>
<Route path="/cart"  element={<><Navbar></Navbar> <Cart></Cart></>}></Route>
<Route path="/Admin"  element={<><AdminNavbar></AdminNavbar> <AdminHome></AdminHome></>}></Route>
<Route path="/Admin/AddNewProduct"  element={<><AdminNavbar></AdminNavbar><AddProduct></AddProduct></>}></Route>
<Route path="/Admin/AddNewProduct/:params"  element={<><EditProduct></EditProduct></>}></Route>
</Routes>


  </>
}

export default App;
