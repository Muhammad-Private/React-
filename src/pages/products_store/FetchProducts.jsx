import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsapi } from '../../redux/Products/fetchProducts';
import Addproducts from '../add_products/Addproducts';
import './Store.css'

export default function ShowProducts({handleDeleteProduct}) {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.fetchProductsSlice);

  useEffect(() => {
    dispatch(fetchProductsapi());
  }, []);


  const  addtocart=(product)=>{
    const produts=JSON.stringify(product);
    localStorage.setItem(product._id,produts)
  }





  return (
    <>
      <div className="products">
        {products?.data?.map((product) => (
          <div className="card" key={product._id}>
            <div style={{ textAlign: 'right' }}>
            <span
                onClick={() => handleDeleteProduct(product._id)}
                className="material-symbols-outlined"
                style={{ color: 'black', cursor: 'pointer' }}
              >
                backspace
              </span>
            </div>
            <img src={`${process.env.REACT_APP_Url}/${product.Image}`} className="card-img-top" alt={product.ProductName} />

            <div className="card-body">
              <h5 className="card-title">{product.ProductName}</h5>
              <p className="card-text">{product.Price}$</p>
            </div>
            <div className="center-btn">
              <button 
                onClick={()=>addtocart(product)} 
                type="button" 
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Addproducts />
      </div>
    </>
  );
}
