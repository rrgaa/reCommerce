import React from "react";
import Header from "../Components/Header";
import { Image } from "react-bootstrap";
import BannerImages from "../Images/image 3.png"
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Banner">
        <div className="Banner-Text">
          <p className="Heading-Text animated">Welcome To reCommerce</p>
          <p className="TagLine-Text animated">Find Anything in reCommerce</p>
          <Link to="/shop" className="Shop-Button animated">SHOPPING NOW </Link>
        </div>
        <div className="Banner-Images">
          <Image src={BannerImages} alt="Banner Images"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
