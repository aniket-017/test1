import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import "./ContactUs.css";

const ContactUs = () => {

  const iconStyle = { color: 'white', padding: '12px' }; 
  return (
    <div>
      <section>
        <div className="section-header">
          <div className="container1">
            <h2>Contact Us</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          </div>
        </div>
        <div className="container2">
          <div className="row">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faHome} size="2x" style={iconStyle} />
                </div>
                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faPhone} size="2x" style={iconStyle}/>
                </div>
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>571-457-2321</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" style={iconStyle}/>
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>ntamerrwael@mfano.ga</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div className="input-box">
                  <input type="text" required="true" name="" />
                  <span>Full Name</span>
                </div>
                <div className="input-box">
                  <input type="email" required="true" name="" />
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <textarea required="true" name=""></textarea>
                  <span>Type your Message...</span>
                </div>
                <div className="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
