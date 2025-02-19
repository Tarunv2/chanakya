import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Chanakya</h1>
        <p>Your Gateway to Web Development Excellence</p>
        <button className="admission-btn" onClick={toggleForm}>
          Apply for Admission
        </button>
      </header>

      {showForm && (
        <div className="admission-form-container">
          <h2>Admission Form</h2>
          <form className="admission-form">
            <label>
              Full Name:
              <input type="text" placeholder="Enter your full name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Phone Number:
              <input type="tel" placeholder="Enter your phone number" required />
            </label>
            <label>
              Course:
              <select required>
                <option value="">Select a Course</option>
                <option value="Web Development">Web Development</option>
                <option value="Web Design">Web Design</option>
                <option value="Backend Development">Backend Development</option>
                <option value="Library Access">Library Access</option>
              </select>
            </label>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;