import React, { useState, useEffect } from "react";
import './addproduct.css'
import upload from '../../assets/upload_area.svg'

const Addproduct = () => {
    const [image,SetImage] =useState(false);
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category: "MakeUP",
        price:"",
    })
    const ImageHandler =(e)=>{
        SetImage(e.target.files[0]);
    }
    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value}) 
   }
   const Addproduct = async()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);
    await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})
        if(responseData.success)
        {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("Product Added"):alert("Failed")
            })
        }
   }

    return (
        <div className="add-product">
            <div className="item-f">
                <p> Product tittle </p>
                <input value={productDetails.name} onChange={changeHandler } type='text'  name ='name' placeholder='type here'/>

            </div>
            <div className="price">
            <div className="item-f">
                <p> price </p>
                <input type='text' value={productDetails.price} onChange={changeHandler } name ='price' placeholder='type here'/>
            </div>
           
            </div>
            <div className="item-f">
                <p> product categorey </p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value='MakeUp'>MakeUp</option>
                    <option value='SkinCare'>SkinCare</option>
                </select>

                <div className="item-f">
                    <label htmlFor="file-input">
                        <img src={image?URL.createObjectURL(image): upload} alt="" className="add-img"/>
                    </label>
                    <input onChange={ImageHandler} type='file' name='image' id="file-input" hidden />
                </div>
                <button onClick={()=>{Addproduct()}} className="add"> Add Produt </button>

            </div>

        </div>
)}
export default Addproduct;