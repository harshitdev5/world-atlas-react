import React from 'react';

export default function Contact() {

  function handleFormSubmit(event) {
    event.preventDefault(); // prevent page reload
    const formData = new FormData(event.target); // create FormData object from the form
    const formInputData = Object.fromEntries(formData.entries());          
    console.log(formInputData);
  }

  return (
    <section className='section-contact'>
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className='form-control'
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className='form-control'
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            rows="10"
            className='form-control'
            required
            autoComplete="off"
            placeholder="Enter your message"
            name="message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}