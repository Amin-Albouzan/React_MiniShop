import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar()
{

const Cart=useSelector(state=>state.cart);

return<>

<nav className="navbar navbar-expand-lg bg-body-tertiary mb-5" fixed='top'>
  <div className="container-fluid">
    <Link to={"/"}  className="navbar-brand fs-3" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto fs-5" style={{width:"1400px"}}>
        
        
        <li className="nav-item ms-5 ">
          <Link  to={"/"} className="nav-link active" aria-current="page" >Home</Link>
        </li>


        <li className="nav-item ms-5 " >
          <Link to={"/cart"} className="nav-link" >Cart-{Cart.length ? Cart.length : 0}</Link>
        </li>


        <li className="nav-item dropdown ms-auto me-5 ">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Link to={"/"} className="dropdown-item" href="#">User</Link></li>
            <li><Link to={"/Admin"} className="dropdown-item" href="#">Admin </Link></li>
            
          </ul>
        </li>
       


      </ul>
      
    </div>
  </div>
</nav>



</>


}
export default Navbar;