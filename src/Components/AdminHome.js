import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function AdminHome()
{
const [products,setProducts]=useState([]);


const getAllProducts=()=>{
    fetch('http://localhost:7000/products')
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
}



useEffect(()=>{

    getAllProducts();
},[])

const DeleteCard=(pro)=>{
    Swal.fire({
        title: "Are you sure?",
        text: `Do you want to delete ${pro.title}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

  fetch(`http://localhost:7000/products/${pro.id}`,{
        method:"DELETE"
    })
        .then((res)=>res.json())
        .then((data)=>getAllProducts(data))

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    

}




return  <table className=" table text-center  "  >
<thead >

      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>IMAGES</th>
        <th>DESCRIPTION</th>
        <th>PRICE</th>
        <th >DELETE / EDIT</th>
      </tr>
    </thead>

<tbody>
{      
products.map((pro)=>(
     <tr key={pro.id} >
        
        <td style={{width:"10%"}}>{pro.id}</td>
        <td style={{width:"15%"}}>{pro.title}</td>
        <td  style={{width:"8%"}}><img src={pro.image} style={{width:"100%",height:"90px",backgroundColor:"red"}}></img></td>
        <td style={{width:"40%"}}>{pro.description}</td>
        <td style={{width:"10%"}}>{pro.price}$</td>
     
        <td >  
            <div className="d-flex justify-content-center">
             <span className="btn btn-danger me-2 " onClick={()=>{DeleteCard(pro)}} >Delete </span>
             <Link  to={`AddNewProduct/${pro.id}`} className="btn btn-primary me-2  " style={{width:"70px"}} >Edit </Link>
            </div>
        
       </td>
 
    </tr>
    

))

}
</tbody>
</table>


}
export default AdminHome;