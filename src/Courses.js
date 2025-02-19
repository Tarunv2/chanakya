import React from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const navigate = useNavigate();

  const courseList = [
    { name: "Web Development", fee: "$500" },
    { name: "Web Design", fee: "$400" },
    { name: "Backend Development", fee: "$600" },
    { name: "Full Stack Development", fee: "$800" },
  ];

  const handleJoinNow = () => {
    navigate("/admission"); // Redirecting to Admission Form
  };

  return (
    <div className="courses-container">
      <header className="courses-header">
        <h1>Our Courses</h1>
        <p>Upgrade your skills with our expert-led courses</p>
      </header>

      <section className="course-list">
        {courseList.map((course, index) => (
          <div key={index} className="course-card">
            <h2>{course.name}</h2>
            <p>Fee: {course.fee}</p>
            <button className="join-btn" onClick={handleJoinNow}>
              Join Now
            </button>
          </div>
        ))}
      </section>

      <section className="library-timing">
        <h2>📚 Library Timings</h2>
        <p>Monday - Friday: 9 AM - 8 PM</p>
        <p>Saturday - Sunday: 10 AM - 6 PM</p>
      </section>
    </div>
  );
};

export default Courses;
