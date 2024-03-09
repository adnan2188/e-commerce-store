import React, { useState } from "react";
import { Link, json } from "react-router-dom";
const desc =
  "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.";
const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [prequantity, setPrequantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");
  const handleIncrease = () => {
    if (prequantity < 10) {
      setPrequantity(prequantity + 1);
    }
  };
  const handleDecrease = () => {
    if (prequantity > 1) {
      setPrequantity(prequantity - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }
    // update local storafe
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset form fields
    setPrequantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };
  return (
    <div className="">
      <div className="">
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* {cart component} */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* {Size} */}
          <div className="select-product size">
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option disabled>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="Xl">Xl</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* {Color} */}
          <div className="select-product color">
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option disabled>Select Color</option>
              <option value="Pink">Pink</option>
              <option value="Ash">Ash</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* {Cart plus minus} */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setPrequantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
          {/* {coupon field} */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
              value={coupon}
            />
          </div>
          {/* {button section} */}
          <button type="submit" className="lab-btn">
            <span> Add to cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
