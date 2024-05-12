import React, { useState, useEffect } from "react";
import ProductItem from "../Products/ProductItem";

import "./ProductCard.css";

const ProductCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(true);
  let [products, setProducts] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const prodcutData = await response.json();
        console.log(prodcutData);
        setProducts(prodcutData);
      } catch (error) {
        console.log(`Failed to Fetch Results: ${error.message}`);
      }
    };
    getProducts();
  }, []);

  const onChangeFilters = (e) => {
    let value = e.target.value;

    if (value === "HIGH") {
      products = products.sort((a, b) => (a.price > b.price ? -1 : 1));
      //console.log(highProducts);
      //return setProducts({ ...products, highProducts });
    }
  };

  const showItems = () => {
    setIsView(!isView);
  };

  let view = isView ? "item-view" : "item-hide";
  let productView = isOpen ? "stable" : "increase";

  return (
    <div className="product-card-container">
      <div className="product-data">
        <h1 className="main-heading">DISCOVER OUR PRODUCTS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. <br />
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
      <div className="product-cart">
        <hr />
        <div className="filter-container">
          <div className="count-item-cart">
            <p className="filter-para">{products.length} ITEMS</p>
            <button
              className="filter-para"
              style={{ color: "#585975", marginLeft: "30px" }}
              onClick={showItems}
            >
              {">"} SHOW ITEMS
            </button>
          </div>
          <select className="recommed-form" onChange={onChangeFilters}>
            <option selected>RECOMMENDED</option>
            <option value="NEW">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="HIGH">PRICE: HIGH TO LOW</option>
            <option value="LOW"> PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <hr />
        <div className="body-section">
          <div className={`filter-and-product-section ${view}`}>
            <div className="product-filter-section">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="custom"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="custom" className="font-style">
                  CUSTOMIZBLE
                </label>
              </div>
              <hr />
              <div className="dropdown">
                <div className="dropdown-posotion">
                  <h4>IDEAL FOR</h4>
                  <button
                    onClick={toggleDropdown}
                    className={`dropbtn ${
                      isOpen ? "rotate-up" : "rotate-down"
                    }`}
                  >
                    <span>&#9660;</span>
                  </button>
                </div>
                {isOpen && (
                  <div
                    className={
                      isOpen ? "dropdown-content-show" : "dropdown-content-hide"
                    }
                  >
                    <div className="checkbox-gender">
                      <input type="checkbox" id="men" />
                      <label htmlFor="men">Male</label>
                    </div>
                    <div className="checkbox-gender" id="women">
                      <input type="checkbox" />
                      <label htmlFor="women">Women</label>
                    </div>
                    <div className="checkbox-gender" id="kids">
                      <input type="checkbox" />
                      <label htmlFor="kids">Baby & Kids</label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`product-section-view ${productView}`}>
            <ul className="product-list">
              {products.map((eachProduct) => (
                <ProductItem product={eachProduct} key={eachProduct.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
