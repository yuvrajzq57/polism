import React,{useEffect} from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Rowing } from "@mui/icons-material";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Testimonial = () => {
  useEffect(()=>{
    AOS.init({duration:  1000});
}, []); 
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" data-aos="fade-up">Our Happy Customers<br/></p>
        <h1 className="primary-heading" data-aos="fade-up">What They Are Saying<br/><br/></h1>
        
      </div>
      <Row>
        <Col>
      <div className="testimonial-section-bottom" data-aos="fade-up">
        <img src={ProfilePic} data-aos="fade-up" alt="" />
        <p data-aos="fade-up">
        As a customer of Polism Solutions, I have been thoroughly
        impressed with the level of service and expertise that they 
        have provided me with. Great work done by the team at Polism
        Solutions.
        </p>
        <div className="testimonials-stars-container" data-aos="fade-up">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 data-aos="fade-up">Balwant Singh</h2>
      </div>
      </Col>
      <Col>
      <div className="testimonial-section-bottom" data-aos="fade-up">
        <img src={ProfilePic} data-aos="fade-up" alt="" />
        <p data-aos="fade-up">
        I would highly recommend Polism Solutions ,to anyone in 
        need of top-quality services. Their expertise, dedication,
         and commitment to customer satisfaction make them an exceptional 
         choice in their field.
        </p>
        <div className="testimonials-stars-container" data-aos="fade-up">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
         
        </div>
        <h2 data-aos="fade-up">Yuvraj</h2>
      </div>
      </Col>
      </Row>
    </div>
  );
};

export default Testimonial;