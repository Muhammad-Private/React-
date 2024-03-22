import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/Products/fetchProducts';
import { useNavigate } from 'react-router-dom';
import { deleteproductApi } from './../redux/Products/deleteProduct';
import { addproductApi } from './../redux/Products/AddProduct';

export default function ShowProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.fetchProductsSlice);
  const [formData, setformdata] = useState({
    ProductName: "",
    Price: "",
    Image: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProducts());
    };
    fetchData();
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 12;
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const data = products?.products.slice(indexOfFirstElement, indexOfLastElement);
  const totalPages = Math.ceil(products?.length / elementsPerPage);
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  const deleteProduct = async (_id) => {
    try {
      const res = await dispatch(deleteproductApi(_id));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };


  const add_product = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(addproductApi(formData))
    }
    catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleInputChange=(e)=>
  {
    const {name,value}=e.target;
    setformdata({
      ...formData,[name]:value
    })
  }

  return (
    <>
      <div className='products' style={{ height: "100vh" }}>
        {data?.map((product) => (
          <div className="card" style={{ width: '12rem', height: "16rem" }} key={product._id}>
            <div style={{ textAlign: "right" }}>
              <span onClick={() => deleteProduct(product._id)} className="material-symbols-outlined" style={{ color: "black" }}>
                backspace
              </span>
            </div>
            <img src={product.Img} className="card-img-top" alt={product.ProductName} />
            <div className="card-body">
              <h5 className="card-title">{product.ProductName}</h5>
              <p className="card-text">{product.Price}$</p>
            </div>
            <div className='center-btn'>
              <button type="button" className="btn btn-primary" onClick={() => navigate(`/product/${product._id}`)}>Buy</button>
            </div>
          </div>
        ))}
      </div>


      <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" style={{ width: "50px", height: "50px", borderRadius: "25px" }} data-bs-target="#exampleModal" data-bs-whatever="">+</button>
      </div>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ justifyContent: "center", display: "flex", }}>
              <form onSubmit={(e) => add_product(e)} style={{ border: "none" }}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">ProductName</label>
                  <input type="text" className="form-control" id="recipient-name" name='ProductName' onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Price</label>
                  <input type="number" className="form-control" id="recipient-name" name='Price' onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Image</label>
                  <input type="file" className="form-control" id="recipient-name" name='Img' accept="image/*" onChange={handleInputChange} required />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ul className="pagination justify-content-center" style={{ alignItems: "center", marginTop: "50px" }}>
        {pagesArray.map((page) => (
          <li className="page-item" key={page}>
            <button className="page-link" style={currentPage === page ? { fontWeight: "bolder" } : {}} onClick={() => setCurrentPage(page)} disabled={currentPage === page}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
