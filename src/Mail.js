import React, { useState } from 'react';

function Mail() {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  var email="lokhandeshyam2002@gmail.com"

  function handleSubmit(event) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(inputValue)}`;
  }

  return (
    <div className="container">
      <center><span className="text-dark text-center head" id="contact">Contact Me</span></center>
      <section id="contact" className="mt-4 py-4">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Your Message</label>
                <textarea className="form-control" onChange={handleInputChange} id="exampleFormControlTextarea1" required placeholder="Enter your amazing message" rows="3"></textarea>
              </div>
              <center><button type="submit" className="btn btn-primary">
                Send Email
              </button></center>
            </form>
          </div>
        </div>
    </section>
    </div>
  );
}

export default Mail;

