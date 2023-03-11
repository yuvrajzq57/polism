import React,{useEffect} from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    }, []);
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <div className="size-home">
          <img src={BannerBackground} data-aos="fade-in" alt="" />
          </div>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading"  data-aos="fade-in">
           Welcome to Polism Solutions 
          </h1>
          <p className="primary-text" data-aos="fade-in">
            A company that is commited towards helping newcomers
            fo the IT industry to start smoothly and bulild their 
            careers. 
          </p>
          <button className="secondary-button" data-aos="fade-in"    >
            Know More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img data-aos="fade-in" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;