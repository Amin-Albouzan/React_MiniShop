
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/product_slice';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from './Buttons';
import "../css/products.css"
import { AddToCart } from '../slices/cart_slice';
import { Link } from 'react-router-dom';











function Products()
{

const products=useSelector((state)=>state.products)
const dispatch=useDispatch();

useEffect(()=>{
dispatch(fetchProducts());
},[])



const settings = {
    dots: true,
    infinite: true, // تأكد من أن هذه الخاصية مفعلة
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  


  
return (
<div className='container '  >
    <div className='row'>
<Slider {...settings} >
    {products.map((pro)=>(
    
     <div className='col-lg-3  col-12 mt-4 ' key={pro.id} >
    
    <div className="card text-center " id='card'>
      <img src={pro.image} className="card-img-top m-auto mt-2" alt="..."id='image'></img>
      <div className="card-body " id='card-body'>
        <h5 className="card-title ">{pro.title ? pro.title.slice(0,100) : null} </h5>
        <p className="card-text mt-3">{pro.description ? pro.description.slice(0,100) : null} ... </p>
        <p id='kkkklll'>price : {pro.price}$</p>
        
               <Link id='moreDescription' href="#" className="btn btn-outline-primary" onClick={()=>{dispatch(AddToCart(pro))}}>add to cart</Link>

     
      </div>
    </div> 
    
    
    
    </div> 
    
    ))}
    
    

</Slider>
</div>
</div>





)





















}
export default Products;



// return (
//     <div className='container text-center ' style={{marginTop:"80px"}} >

//     <div className='row'>
    
//     {products.map((pro)=>(
    
//      <div className='col-lg-3 mb-5' key={pro.id}>
    
//     <div className="card" >
//       <img src={pro.image} className="card-img-top" alt="..."></img>
//       <div className="card-body">
//         <h5 className="card-title">{pro.title}</h5>
//         <p className="card-text">{pro.description} </p>
//         <p className='text-center'>price : {pro.price}$</p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
    
    
    
//     </div> 
    
//     ))}
    
    
    
    
//     </div>
    
    
    
    
    
    
    
    
    
    
    
    
//     </div>
//   );