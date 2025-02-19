import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Chanakya</h1>
        <p>Empowering students with top-notch web development skills.</p>
      </header>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          At Chanakya, we strive to build a strong foundation in web development, 
          backend programming, and web design. Our goal is to provide students with 
          real-world knowledge, hands-on experience, and industry-relevant skills 
          that help them excel in their careers. 
        </p>
        <p>
          Our mission is to bridge the gap between traditional education and 
          practical skills. We offer well-structured courses, experienced 
          mentors, and a dynamic learning environment that prepares students 
          for real-world projects and job opportunities. 
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced Instructors</li>
          <li>Hands-on Projects</li>
          <li>Industry-Relevant Curriculum</li>
          <li>Supportive Community</li>
          <li>100% Job Assistance</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
