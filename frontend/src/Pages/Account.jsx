import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("auth_token");

        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        const response = await fetch("http://localhost:4000/api/account", {
          headers: { Authorization: `Bearer ${token} `},
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch account details.");
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
        setError("An error occurred while fetching account details.");
      }
    };

    fetchData();
  }, []);

  // Logout function
  const handleLogout = () => {
    // Remove the auth token from localStorage
    localStorage.removeItem("auth_token");

    // Redirect to the home page
    navigate("/");
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Account</h1>
      <p>Name: {userData.name}</p>
      <p>Country: {userData.country}</p>
      <p>
        <a href="/addresses">View addresses ({userData.addresses.length})</a>
      </p>
      <button onClick={handleLogout}>Log out</button>

      <hr />

      <h2>Order History</h2>
      {userData.orders && userData.orders.length > 0 ? (
        <ul>
          {userData.orders.map((order, index) => (
            <li key={index}>
              <h3>Order ID: {order.orderId}</h3>
              <p>Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>Status: {order.status}</p>
              <p>Total: ${order.totalAmount}</p>
              <h4>Products:</h4>
              <ul>
                {order.products.map((product, idx) => (
                  <li key={idx}>
                    <p>{product.productId.name} x{product.quantity}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders yet.</p>
      )}

      <hr />

      <h2>Cart</h2>
      {userData.cartData && userData.cartData.length > 0 ? (
        <ul>
          {userData.cartData.map((item, index) => (
            <li key={index}>
              <p>Product: {item.productId.name}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <hr />

      <h2>Wishlist</h2>
      {userData.wishlistData && userData.wishlistData.length > 0 ? (
        <ul>
          {userData.wishlistData.map((item, index) => (
            <li key={index}>
              <p>Product: {item.productId.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default Account;