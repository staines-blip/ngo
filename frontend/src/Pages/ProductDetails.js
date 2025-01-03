import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

// Import towel images
import T1_img from '../Components/Assets/T1.png';
import T2_img from '../Components/Assets/T2.png';
import T3_img from '../Components/Assets/T3.png';
import T4_img from '../Components/Assets/T4.png';
import T5_img from '../Components/Assets/T5.png';

// Import wishlist icon
import WishlistIcon from '../Components/Assets/heart.png'; // Replace with the path to your icon

// Define the towel data
const towels = [
  {
    id: 1,
    name: 'Rose printed towel',
    images: [T1_img, T2_img, T3_img, T4_img, T5_img],
    new_price: 130.0,
    old_price: 80.0,
  },
  {
    id: 2,
    name: 'Blue leaf towel',
    images: [T2_img, T3_img, T4_img, T5_img, T1_img],
    new_price: 130.0,
    old_price: 80.0,
  },
  {
    id: 3,
    name: 'Brown cotton towel',
    images: [T3_img, T4_img, T5_img, T1_img, T2_img],
    new_price: 130.0,
    old_price: 80.0,
  },
  {
    id: 4,
    name: 'Multi circle cotton towel',
    images: [T4_img, T5_img, T1_img, T2_img, T3_img],
    new_price: 130.0,
    old_price: 80.0,
  },
  {
    id: 5,
    name: 'Baby penguin towel',
    images: [T5_img, T1_img, T2_img, T3_img, T4_img],
    new_price: 130.0,
    old_price: 80.0,
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const product = towels.find((towel) => towel.id === parseInt(id)); // Find the product by ID

  const [mainImage, setMainImage] = useState(product?.images[0]); // State for main image

  if (!product) {
    return <div>Product not found!</div>; // Handle case where the product isn't found
  }

  return (
    <div className="product-details">
      {/* Left Section - Image Gallery */}
      <div className="image-gallery">
        <div className="main-image-container">
          <img src={mainImage} alt={product.name} className="main-image" />
          {/* Wishlist Icon */}
          <img
            src={WishlistIcon}
            alt="Add to Wishlist"
            className="wishlist-icon"
            role="button"
            aria-label="Add to Wishlist"
          />
        </div>
        {/* Thumbnails */}
        <div className="thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => setMainImage(image)} // Update the main image on click
              role="button"
              aria-label={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Product Information */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">
          <strong>₹{product.new_price.toFixed(2)}</strong>
          <span className="old-price">₹{product.old_price.toFixed(2)}</span>
          <span className="discount">
            (Save {((1 - product.new_price / product.old_price) * 100).toFixed(0)}%)
          </span>
        </p>
        <p className="description">
          <strong>Description:</strong> A detailed description about the product. You can customize this description as
          needed.
        </p>

        {/* Delivery Check */}
        <div className="delivery-check">
          <input type="text" placeholder="Enter a Pincode" aria-label="Enter your pincode" />
          <button>Check</button>
        </div>

        {/* Variant Selection */}
        <div className="variant-selection">
          <label htmlFor="variant">Choose Variant:</label>
          <select id="variant">
            <option value="set1">Bath Towel, Set of 1</option>
            <option value="set2">Bath Towel, Set of 2</option>
            <option value="set3">Bath Towel, Set of 3</option>
            <option value="set4">Bath Towel, Set of 4</option>
            <option value="set5">Bath Towel, Set of 5</option>
          </select>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart">Add To Cart</button>

        {/* Offers Section */}
        <div className="offers">
          <p>Save extra with below offers:</p>
          <ul>
            <li className="offer-item">5% off on card payment</li>
            <li className="offer-item">10% off on UPI payment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
