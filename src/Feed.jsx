import React, { useState } from 'react';

function FeedbackForm() {
 
  const [formData, setFormData] = useState({
    name: '',
    feedback: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(`Thank you, ${formData.name}, for your feedback!`);
   
    setFormData({ name: '', feedback: '' });
  };

  return (
    <div style={{ padding: '20px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems:'center',height: '510px'}}>
      <h2> Feedback Form</h2>
      <form onSubmit={handleSubmit}>
      
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>

      
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="feedback" style={{ display: 'block', marginBottom: '5px' }}>Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Write your feedback here"
            rows="4"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>

        
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: 'purple',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
