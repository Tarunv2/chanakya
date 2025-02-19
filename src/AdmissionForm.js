import React, { useState } from "react";
import "./Admission.css";

const Admission = () => {
  const courses = {
    "Web Development": "$500",
    "Web Design": "$400",
    "Backend Development": "$600",
    "Full Stack Development": "$800",
  };

  const [selectedCourse, setSelectedCourse] = useState("");
  const [price, setPrice] = useState("");

  const handleCourseChange = (event) => {
    const course = event.target.value;
    setSelectedCourse(course);
    setPrice(courses[course] || "");
  };

  return (
    <div className="admission-container">
      <h1>Online Admission Form</h1>
      <form className="admission-form">
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone Number:</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Select Course:</label>
        <select onChange={handleCourseChange} required>
          <option value="">-- Select a Course --</option>
          {Object.keys(courses).map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        {selectedCourse && (
          <div className="course-price">
            <p>Price: <strong>{price}</strong></p>
            <button className="payment-btn">Proceed to Payment</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Admission;
