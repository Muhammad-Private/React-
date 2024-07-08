import React, { useState } from 'react'
import "./add_product.css"
import { useDispatch } from 'react-redux'
import {addproductApi} from "../../redux/Products/AddProduct"

export default function Addproducts() {

  const from_data=useState({
    ProductName:"",
    Price:"",
    Image:""
  })
  const dispatch=useDispatch();
 
 const handle_change=(e)=>
  {
  const {value,name}=e.target;
  console.log({
    value:value,
    type:name
  });

 }


  const add_product=(e)=>
    {
      dispatch(addproductApi(from_data))
    }

  return (
    <>
    <div className='addproductbtn'>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
      <span className="material-symbols-outlined">add</span>
</button>
    </div>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form onSubmit={add_product}>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">ProductName:</label>
              <input type="text" className="form-control" id="recipient-name" name='ProductName' onChange={(e)=>handle_change(e)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">Price:</label>
              <input type="text" className="form-control" id="recipient-name"  name='Price' onChange={(e)=>handle_change(e)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">Image:</label>
              <input type="file" className="form-control" id="recipient-name" accept="image/*" name='Image' onChange={(e)=>handle_change(e)} required/>
            </div>
            <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="Submit" className="btn btn-primary">Add Product</button>
        </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>


  )
}
