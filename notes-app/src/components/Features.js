import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="feature-card blue">
      <h3>Secure Cloud Storage</h3>
        <p>Keep your notes safe and accessible from anywhere with our secure cloud storage.</p>
      </div>
      <div className="feature-card red">
      <h3>Easy-to-Use Interface</h3>
        <p>Our user-friendly interface makes it easy to create, edit, and manage your notes.</p>
      </div>
      <div className="feature-card orange">
      <h3>Dark Mode Support</h3>
        <p>Switch to dark mode for a more comfortable viewing experience, especially in low light.</p>
      </div>
    </section>
  );
};
export default Features;