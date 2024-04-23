import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import "../css/contactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    to_name: '', // Recipient's name
    from_name: '', // Sender's name
    message: '', // Message
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID and template ID
    const serviceID = 'service_24q55ow';
    const templateID = 'template_j8izv6p';

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, formData,'Bkj_1MEgAibXpWTZ-')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Clear the form or display a success message
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Display an error message
      });
  };

  return (
      <div className="personal-bio-form">
      <h2>Contact</h2>
      <p>For any requests or questions you can send a message below.</p>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="email">Enter your First Name</label>
          <input
            type="text"
            id="to_name"
            name="to_name"
            placeholder='ex. Mohammed'
            value={formData.to_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter your email address</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder='ex. email@email.com'
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Write your message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Write your message here....'
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  )
};

export default ContactForm;
