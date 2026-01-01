import "./Contact.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log('Form submitted:', formData);
    
    try {
      // Send data to backend
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );
      
      console.log('✅ Backend response:', response.data);
      
      alert('✅Form submitted successfully');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      
      // Show user-friendly error
      if (error.response) {
        alert(`Error: ${error.response.data.error || 'Failed to send'}`);
      } else if (error.request) {
        alert('Server is down at this time. Please try again later.');
      } else {
        alert(`Error: ${error.message}`);
      }
      
      // Save to localStorage as backup
      const timestamp = new Date().getTime();
      const formKey = `contact_form_${timestamp}`;
      localStorage.setItem(formKey, JSON.stringify(formData));
      console.log('Saved to localStorage as backup:', formKey);
      
    } finally {
      setIsLoading(false);
    }
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    preferences: {}
  });

  useEffect(() => {
    // Load user preferences
    const savedUser = localStorage.getItem('user_preferences');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
      }
    }
  }, []);

  // Save user preferences to a DIFFERENT key
  useEffect(() => {
    if (user.name || user.email) {
      localStorage.setItem('user_preferences', JSON.stringify(user));
    }
  }, [user]);

    
  return (
    <>

      <section className="contact_form_section">
        <div className="container">
          <div className="contact_form">
            <div className="contact_title">
              <h2>Fill out the form.</h2>
            </div>
            
            <form className="fill_form" onSubmit={handleSubmit}>
              <div className="fill_detail">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  disabled={isLoading}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                
                {/* Textarea for message - uses your existing CSS class */}
                <textarea 
                  name="message"
                  placeholder="Message"
                  className="Message_detail"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows="5"
                />
                
                {/* Keep your original anchor tag structure */}
                <a href="#" onClick={handleSubmit}>
                  <span>{isLoading ? "Sending..." : "Send"}</span>
                </a>
              </div>
              <div className="Other_detail">
                <div className="other_detail_rightside">
                  <div>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h2>Address</h2>
                    <p>#135 block, Barnard St. Brooklyn, London 10036, UK</p>
                  </div>
                </div>

                <div className="other_detail_rightside">
                  <div>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h2>Telephone</h2>
                    <p>+91 9879069667</p>
                    <p>+91 9879069667</p>
                  </div>
                </div>

                <div className="other_detail_rightside">
                  <div>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h2>Email Us</h2>
                    <p>jdjaviya98790@gmail.com</p>
                    <p>jdjaviya98790@gmail.com</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;