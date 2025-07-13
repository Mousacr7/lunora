import React from 'react'
import Nav from '../component/Nav'
import FeaturedProducts from '../component/FeaturedProducts'
import TestimonialCarousel from '../component/Testimonial'
import Footer from '../component/Footer'
import { FaShoppingBag } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { products } from "../data/Projects";

const Home = () => {
    const navigate = useNavigate();
  
    // ✅ Get first product for each unique subcategory
    const firstProductsBySub = new Map();
  
    products.forEach((product) => {
      if (product.subcategory && !firstProductsBySub.has(product.subcategory)) {
        firstProductsBySub.set(product.subcategory, product);
      }
    });
  
  return (
    <>
      <header>
      <Nav />

<section class="hero">
  <div class="hero-image-wrapper">
    <picture>
      {/* <!-- Mobile first --> */}
      <source media="(min-width: 768px)" srcset="./asset/hero-desktop.png" />
      <img src="./asset/hero-mobile.png" alt="Tech products display" class="hero-img" />
    </picture>
  </div>

  <div class="hero-content">
    <h1>Level Up <br />Your Tech Game</h1>
    <p>Premium accessories for phones, AirPods & more.</p>
    <div class="hero-buttons">
      <button onClick={() =>
          navigate("/products")} class="btn primary">Shop Now <FaShoppingBag /></button>
    </div>
  </div>
</section>


      </header>
      <main>
          {/* ✅ Subcategory buttons with image */}
<div className="subcategory">
  <ul className="subcategory-list">
    {Array.from(firstProductsBySub.entries()).map(([sub, product]) => (
      <li
        key={sub}
        className="sub-btn"
        onClick={() =>
          navigate("/products", { state: { subcategory: sub } })
        }
      >
        <img
          src={product.image[0]}
          alt={product.name}
          className="sub-thumb"
          loading="lazy"
        />
        <span>{sub}</span>
      </li>
    ))}
  </ul>
</div>

      <FeaturedProducts />
      <TestimonialCarousel />
      </main>
      <Footer />
    </>
  )
}

export default Home
