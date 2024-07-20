import React, { useEffect, useRef, useState } from 'react';

export default function Cart() {
  const [products, setProducts] = useState([]);
  const isInitialMount = useRef(true);

  const showProducts = () => {
    const allProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      let product = localStorage.getItem(key);
      product = JSON.parse(product);
      allProducts.push(product);
    }
    setProducts(allProducts);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      showProducts();
      isInitialMount.current = false;
    }
  }, []);

  const handleDeleteProduct = (id) => {
    if(localStorage.getItem(id)==undefined){
      alert(`product not exsist`);
      return;
    }
    localStorage.removeItem(id);
    setProducts((prevProducts) => prevProducts.filter(product => product._id !== id));
  };

  return (
    <div className="products">
      {products?.map((product) => (
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
        </div>
      ))}
    </div>
  );
}
