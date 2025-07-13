import { Link } from "react-router-dom";
import { products } from "../data/Projects";
import ProductsList from "./ProductsList";
import "./products.css"

const FeaturedProducts = () => {

  const featuredItems = products.filter((item) => item.featured);
  return (
    <section>
      <div className="container">
        
        <div className="content-wrapper">
        <div className="featured-header">
            <h2>Featured Products</h2>
          </div>
  <h3 className="see-all" ><Link to="/products">See all →</Link></h3>
  
        <ProductsList 
        products={featuredItems}
        num={6}
        />
      </div>
    </div>
    </section>
  );
};

export default FeaturedProducts;
