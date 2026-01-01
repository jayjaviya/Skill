import React from 'react';
import './Footer.css';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_detail">
          <div className="footer_row1">
            <div className="f_row1_logo">
              <img src="public/logo.png" alt="Skill Logo" />
              <h2>Skill</h2>
            </div>
            <div>
              <p>
                We amplify important ideas in mathematics <br /> education to help teachers grow their practice <br />and our profession.Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="footer_row2">
            <div>
              <h2><span>Explore More</span></h2>
            </div>
            <div>
              <ul>
                <li>Gallery</li>
                <li>Courses</li>
                <li>Landing Page</li>
                <li>Apply Now</li>
                <li>Buy Course Online</li>
              </ul>
            </div>
          </div>
          <div className="footer_row3">
            <div>
              <h2><span>Recent Post</span></h2>
            </div>
            <div className="recent_post">
              <div className="footer_row3_contain">
                <img src="footer_img/img1.png" alt="Programming Certification" />
                <p>How to get Programming language <br />Cartification in 45 days.</p>
              </div>
              <div className="footer_row3_contain">
                <img src="footer_img/img2.png" alt="Online Learning" />
                <p>Top class learning from anywhere <br />Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="footer_row3_contain">
                <img src="footer_img/img3.png" alt="Improving Lives" />
                <p>Improving lives through learning <br />Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="footer_row4">
            <div>
              <h2><span>Quick Links</span></h2>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_social_media">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="copyright_line">
          <div className="container">
            <p>
              © <span className="copyright_year">{currentYear}</span> Trace. All Rights Reserved. Design by 
              <a href="https://w3layouts.com/" target="_blank" rel="noopener noreferrer">
                W3layouts
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;