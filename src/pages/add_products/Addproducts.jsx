import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addproductApi } from '../../redux/Products/AddProduct';
import { fetchProductsapi } from '../../redux/Products/fetchProducts';
import './add_product.css';

export default function AddProducts() {
  const [formData, setFormData] = useState({
    ProductName: '',
    Price: '',
    Image: null,
  });
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'Image' ? files[0] : value,
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    await dispatch(addproductApi(data));
    await dispatch(fetchProductsapi());
  };




  
  return (
    <>
      <div className="add-product-btn">
        <button
          type="button"
          className="plus"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
          data-bs-whatever="@mdo"
        >
          +
        </button>
      </div>

      <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addProductLabel">Add Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddProduct}>
                <div className="mb-3">
                  <label htmlFor="productName" className="col-form-label">Product Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="ProductName"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="col-form-label">Price:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productPrice"
                    name="Price"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productImage" className="col-form-label">Image:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="productImage"
                    accept="image/*"
                    name="Image"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
