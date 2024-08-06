import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function AddProduct()
{
const [id,setId]=useState(0);
const [title,setTitle]=useState('');
const [description,setDescription]=useState('');
const [price,setPrice]=useState(0);
const [category,setCategory]=useState('');
const [image,setImage]=useState('');
const Navigate=useNavigate();

const formSubmit=(e)=>
    {
e.preventDefault();
fetch("http://localhost:7000/products",
{method:"POST",
  
      body: JSON.stringify({id,title,description,price,category,image})
    
})
.then((res)=>res.json())
.then((data)=>data);

Swal.fire({
   
    icon: "success",
    title: "The product has been added successfully",

  });

Navigate("/Admin");
    }





return<>
<div className="container" style={{width:"90%"}}>
<h1 className="text-center">Add New Product</h1>
<form onSubmit={formSubmit}>

<div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
    <input type="number" className="form-control " id="product-ID"
     aria-describedby="product Id" placeholder="product Id"
     onChange={(e)=>setId(e.target.value)} required/>
  </div>


  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control " id="product-Title"
     aria-describedby="product title" placeholder="product Title"
     onChange={(e)=>setTitle(e.target.value)} required/>
  </div>



  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
    <input type="text" className="form-control " id="product-Description"
     aria-describedby="product Description" placeholder="product Description"
     onChange={(e)=>setDescription(e.target.value)} required/>
  </div>



   <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
    <input type="number" className="form-control "
     id="product-Price" aria-describedby="product Price"
      placeholder="product Price" onChange={(e)=>setPrice(e.target.value)} required/>
  </div>


  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
    <input type="text" className="form-control "
     id="product-category" aria-describedby="product category"
      placeholder="product category" onChange={(e)=>setCategory(e.target.value)} required/>
  </div>


  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
    <input type="text" className="form-control "
     id="product-Image " aria-describedby="product Image "
      placeholder="product Image url" onChange={(e)=>setImage(e.target.value)} required/>
  </div>




 <div style={{width:"100%",textAlign:"center",marginTop:"50px",marginBottom:"50px"}}>
  <button type="submit" className="btn btn-outline-success  ">Add Product</button>
  </div>
</form>
</div>




</>


}
export default AddProduct;