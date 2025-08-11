import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  travelDate: string;
  groupSize: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    travelDate: '',
    groupSize: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };
  
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch to plan your perfect trip to Monguí</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Monguí Travel Agency</h2>
          <p>We specialize in creating memorable experiences in the beautiful heritage town of Monguí and surrounding areas of Boyacá, Colombia.</p>
          
          <div className="info-item">
            <strong>Address:</strong>
            <p>Plaza Principal, Monguí, Boyacá, Colombia</p>
          </div>
          
          <div className="info-item">
            <strong>Phone:</strong>
            <p>+57 123 456 7890</p>
          </div>
          
          <div className="info-item">
            <strong>Email:</strong>
            <p>info@monguitravel.com</p>
          </div>
          
          <div className="info-item">
            <strong>Hours:</strong>
            <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
          </div>
        </div>
        
        <div className="contact-form">
          {submitted ? (
            <div className="success-message">
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully. We will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="btn btn-primary">Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="travelDate">Planned Travel Date</label>
                  <input 
                    type="date" 
                    id="travelDate" 
                    name="travelDate" 
                    value={formData.travelDate} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="groupSize">Group Size</label>
                  <select 
                    id="groupSize" 
                    name="groupSize" 
                    value={formData.groupSize} 
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3-5">3-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="10+">More than 10 people</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;