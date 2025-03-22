import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$40", image: "https://via.placeholder.com/150" },
];

const HeroSection = () => (
  <section className="text-center p-10 bg-gray-100">
    <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
    <p className="text-lg mt-2">Find the best products at unbeatable prices!</p>
  </section>
);

const ProductList = () => (
  <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <div key={product.id} className="border p-4 rounded-lg">
        <img src={product.image} alt={product.name} className="w-full" />
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-lg text-gray-700">{product.price}</p>
        <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">View Details</Link>
      </div>
    ))}
  </section>
);

const ProductDetails = ({ id }) => {
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p className="text-center p-10">Product not found</p>;
  return (
    <div className="p-10">
      <img src={product.image} alt={product.name} className="w-full" />
      <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
      <p className="text-lg text-gray-700">{product.price}</p>
    </div>
  );
};

const Navbar = () => (
  <nav className="p-4 bg-blue-600 text-white flex justify-between">
    <Link to="/" className="text-xl font-bold">Store</Link>
  </nav>
);

const Footer = () => (
  <footer className="p-4 bg-gray-800 text-white text-center">
    <div className="flex justify-center gap-4">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </div>
  </footer>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<><HeroSection /><ProductList /></>} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
