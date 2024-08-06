import { useDispatch, useSelector } from "react-redux";
import { DeleteAll, DeleteThisCart } from "../slices/cart_slice";


function Cart()
{
const products=useSelector(state=>state.cart);
const dispatch=useDispatch();
const totalPrice=products.reduce((total,product)=>{
total+=Number(product.price)*product.quantity;
return total;
},0)


return(<>

<h1 className="mb-5 ms-3" >{products.length ? "Total Price : "+ totalPrice.toFixed(2)+"$" : null}</h1>
{products.length ? <span className="btn btn-danger mb-2 ms-2"  onClick={()=>{dispatch(DeleteAll())}}>DELETE ALL</span> : null}
 <table className=" table text-center  "  >
    <thead >

          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>IMAGES</th>
            <th>DESCRIPTION</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th >DELETE CART</th>
          </tr>
        </thead>
 
    <tbody>
   {      
    products.map((pro)=>(
         <tr className="">
            <td style={{width:"10%"}}>{pro.id}</td>
            <td style={{width:"15%"}}>{pro.title}</td>
            <td  style={{width:"8%"}}><img src={pro.image} style={{width:"100%",height:"90px",backgroundColor:"red"}}></img></td>
            <td style={{width:"40%"}}>{pro.description}</td>
            <td style={{width:"5%"}}>{pro.quantity}</td>
            <td style={{width:"10%"}}>{pro.price}$</td>
         
            <td > 
                <span className="btn btn-danger me-2 " onClick={()=>{dispatch(DeleteThisCart(pro))}}>Delete Cart</span>
    
           </td>
        </tr>))
    
   }
    </tbody>
  </table>
  </>
)

}


export default Cart;






