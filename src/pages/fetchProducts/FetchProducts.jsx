import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Products/fetchProducts';
import { useNavigate } from 'react-router-dom';
import { deleteproductApi } from '../../redux/Products/deleteProduct';
import AddProduct, { addproductApi } from '../../redux/Products/AddProduct';
import Addproducts from '../add_product/Addproducts';

export default function ShowProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.fetchProductsSlice);
  const [formData, setFormData] = useState({
    ProductName: '',
    Price: '',
    Image: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(e.target.type==="file")
    {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    }
    else{
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const deleteProduct = async (_id) => {
    // try {
    //  const res= await dispatch(deleteproductApi(_id));
    //  if(res.meta.requestStatus==='fulfilled')
    //  {
    //   continue;
    //  }
    // } 
    // catch (error) 
    // {
    //   console.error('Error deleting product:', error.message);

    // }
  };


  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const res=await dispatch(addproductApi(formData));
      console.log(res)
      if(res.meta.requestStatus==='fulfilled')
      {
        setFormData({
          ProductName: '',
          Price: '',
          Image: '',
        });
      }
    } catch (error) 
    {
      console.error('Error adding product:', error);
    }
  };




  return (
    <>
          <div className="products" style={{ height: '90vh' }}>
        {state?.products?.data.map((product) => (
          <div className="card" style={{ width: '12rem', height: '16rem' }} key={product._id}>
            <div style={{ textAlign: 'right' }}>
              <span
                onClick={() => deleteProduct(product._id)}
                className="material-symbols-outlined"
                style={{ color: 'black', cursor: 'pointer' }}
              >
                backspace
              </span>
            </div>
            <img src={product.Image} className="card-img-top" alt={product.ProductName} />

            <div className="card-body">
              <h5 className="card-title">{product.ProductName}</h5>
              <p className="card-text">{product.Price}$</p>
            </div>
            <div className="center-btn">
              <button type="button" className="btn btn-primary">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
       <Addproducts/> 
    </>
  );
}