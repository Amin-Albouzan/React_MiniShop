import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
function EditProduct()
{
const {params}=useParams();
const [product,setProduct]=useState();
const [id,setId]=useState(0);
const [title,setTitle]=useState('');
const [description,setDescription]=useState('');
const [price,setPrice]=useState(0);
const [category,setCategory]=useState('');
const [image,setImage]=useState('');
const Navigate=useNavigate();



const getProduct=()=>{

    fetch(`http://localhost:7000/products/${params}`)
    .then((res)=>res.json())
    .then((data)=>{
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setCategory(data.category);
        setImage(data.image);
        setProduct(data);
})
}


useEffect(()=>{

getProduct();

},[])



const formSubmit=(e)=>
    {
e.preventDefault();
fetch(`http://localhost:7000/products/${params}`,
{method:"PUT",
 
  body: JSON.stringify({title,description,price,category,image})
    
})
.then((res)=>res.json())
.then((data)=>console.log(data));

Swal.fire({
   
    icon: "success",
    title: "The product has been update successfully",

  });

Navigate("/Admin");

    }






return<>
<div className="container" style={{width:"90%"}}>
<h1 className="text-center">Add New Product</h1>
<form onSubmit={formSubmit}>




  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control " id="product-Title"
     aria-describedby="product title" placeholder="product Title" value={title}
     onChange={(e)=>setTitle(e.target.value)} required/>
  </div>



  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
    <input type="text" className="form-control " id="product-Description"
     aria-describedby="product Description" placeholder="product Description" value={description}
     onChange={(e)=>setDescription(e.target.value)} required/>
  </div>



   <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
    <input type="number" className="form-control "
     id="product-Price" aria-describedby="product Price" value={price}
      placeholder="product Price" onChange={(e)=>setPrice(e.target.value)} required/>
  </div>


  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
    <input type="text" className="form-control "
     id="product-category" aria-describedby="product category" value={category}
      placeholder="product category" onChange={(e)=>setCategory(e.target.value)} required/>
  </div>


  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
    <input type="text" className="form-control "
     id="product-Image " aria-describedby="product Image " value={image}
      placeholder="product Image url" onChange={(e)=>setImage(e.target.value)}/>
  </div>




 <div style={{width:"100%",textAlign:"center",marginTop:"50px",marginBottom:"50px"}}>
  <button type="submit" className="btn btn-outline-success  ">Add Product</button>
  </div>
</form>
</div>




</>

}
export default EditProduct;