import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Products/fetchProducts';
import { deleteproductApi } from '../../redux/Products/deleteProduct';
import Addproducts from '../add_product/Addproducts';
import './style.css'
export default function ShowProducts() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.fetchProductsSlice);
  const [formData, setFormData] = useState({
    ProductName: '',
    Price: '',
    Image: '',
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const deleteProduct = async (_id) => {
    try {
      await dispatch(deleteproductApi(_id));
      // Refetch products after deletion to update the list
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="products">
        {products?.data?.map((product) => (
          <div className="card"  key={product._id}>
            <div style={{ textAlign: 'right' }}>
              <span
                onClick={() => deleteProduct(product._id)}
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
              <button type="button" className="btn btn-primary">
                Buy
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
