import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div>
     <section id="overview">
    <div class="overview-content">
        <h2>Who Are We?</h2>
        <p class="overview-description">
            We are Zealits Solutions, a software development and services consulting company providing premium services to clients globally. Established in the summer of 2007, we specialize in software development, web design, custom application development, product development, Rich Internet Applications (RIAs), design/multimedia services, SEO lifecycle services, Six Sigma solutions, and Corporate Branding solutions.
        </p>
        <div class="services-list">
            <div class="service">
                <h3>Consulting & Planning</h3>
                <p>An effective application requires clear goals, comprehensive planning, and expert execution. Contact us for a free consultation.</p>
            </div>
            <div class="service">
                <h3>Architecture & Design</h3>
                <p>We organize all aspects of the project while constantly communicating with the client, creating smart and usable interfaces with a strong focus on accessibility and semantically correct markup.</p>
            </div>
            <div class="service">
                <h3>Application Development</h3>
                <p>We offer robust and sophisticated solutions, from content management systems to specifically targeted web applications, ensuring high usability and search engine optimization.</p>
            </div>
        </div>
    </div>
</section>


      </div>
   
  )
}

export default AboutUs