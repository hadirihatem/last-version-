import React from 'react'
import Address from '../websiteimages/address.png'
import Email from '../websiteimages/email.png'
import Phone from '../websiteimages/phone.png'
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import "./Contact.css";
import Footer from '../footer/Footer'
const Contact = () =>{
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_782w6ag",
          "template_sbvql0v",
          formRef.current,
          "user_9xWIS4mUSjFYAVAKgwxSu"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div>
      <div className="c">
      
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img  style={{width:'30px',height:"30px"}} src={Phone} alt="" className="c-icon" />
               +21623122756
              </div>
              <div className="c-info-item">
                <img  style={{width:'30px',height:"30px"}}className="c-icon" src={Email} alt="" />
                moncef.b.abdeljelil@gmail.com
              </div>
              <div className="c-info-item">
                <img  className="c-icon" src={Address} alt="" />
               8 rue bizert 4070 sousse
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Thank you..."}
            </form>
            </div>
            </div>
            </div>
            <div>
            <Footer/>
            </div>
            </div>
    );
  };

export default Contact
