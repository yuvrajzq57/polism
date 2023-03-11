
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(()=>{
        AOS.init({duration:  1000});
    }, []); 
  return (
    <div className="contact-page-wrapper" >
      <h1 className="primary-heading" data-aos="fade-in" >Have Question In Mind?</h1>
      <h1 className="primary-heading" data-aos="fade-in">Let Us Help You</h1>
      <div className="contact-form-container" data-aos="fade-in">
        <input type="text" data-aos="fade-in" placeholder="yourmailid@polism.com" />
        <button className="secondary-button" data-aos="fade-in">Submit</button>
      </div>
    </div>
  );
};

export default Contact;