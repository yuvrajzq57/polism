import React,{useEffect} from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image-1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(()=>{
        AOS.init({duration:  1000});
    }, []); 
  return (
    <div className="about-section-container" data-aos="fade-up">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} height={1200} width={1200} data-aos="fade-up" alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading" data-aos="fade-up">Vision</p>
        <h1 className="primary-heading" data-aos="fade-up">
          We aim to Empower Newcomers to the IT Industry
        </h1>
        <p className="primary-text" data-aos="fade-up">
          We aim to provide a holistic approach to employment by offering access
          to health,wealth and entertainment opprtunities under one roof.
        </p>
        <p className="primary-text" data-aos="fade-up">
          We create a supportive and inclusive enviroment that helps the clients 
          to achieve their career goals.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" data-aos="fade-up">Know More<FiArrowRight />{" "}</button>
        </div>
      </div>
    </div>
  );
};

export default About;