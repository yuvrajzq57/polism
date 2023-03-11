import React,{useEffect} from "react";
import UpSkilling from "../Assets/pick-meals-image.png";
import Wealth from "../Assets/choose-image.jpg";
import Entertaintment from "../Assets/delivery-image.png";
import Health from "../Assets/delivery-image.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

//Offerings
const Work = () => {
    useEffect(()=>{
        AOS.init({duration:  1000});
    }, []); 
  const workInfoData = [
    {
      image: UpSkilling,
      title: "Upskilling",
      text: "Improving technical skills through workshops and training programs conducted by us.",
    },
    {
        image: Health,
        title: "Health & Wellness",
        text: "We offer access to health and wellness services like gym memeberships and couselling services.",
    },
    {
        image: Entertaintment,
        title: "Entertaitment",
        text: "A range of discouts and offers on movie tickets and concerts ,to help our clients relax & unwind",
    },
    {
        image: Wealth,
        title: "Wealth Management",
        text: "We offer financial services and investment advice to help our clients achieve their financial goals.",
      },
  
    
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" data-aos="fade-up">Offerings</p>
        <h1 className="primary-heading" data-aos="fade-up">What we offer</h1>
        <p className="primary-text" data-aos="fade-up">
          We offer a wide range of services designed to meet the 
          needs of newcomers to the IT industry. Our offerings include  
        </p>
      </div>
      <div className="work-section-bottom" data-aos="fade-up">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} data-aos="fade-up" alt="" />
            </div>
            <h2 data-aos="fade-up">{data.title}</h2>
            <p data-aos="fade-up">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;