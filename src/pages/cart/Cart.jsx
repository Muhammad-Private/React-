import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproductApi } from '../../redux/Products/deleteProduct';

export default function Cart() {
  const dispatch = useDispatch();
  const state=useSelector((state)=>state.addtocartslice)
  const [products,setproducts]=useState([]);


useEffect(()=>
  {
    setproducts(state?.products)
},[])


  const handleDeleteProduct=(id)=>
    {
     //
    }




  return (
    <>
      <div className="products">
        {products?.map((product) => (
          <div className="card" key={product._id}>
            <div style={{ textAlign: 'right' }}>
              <span
                  onClick={() =>  handleDeleteProduct(product._id)}
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
            </div>
          </div>
        ))}
        </div>
    </>

  );
}
