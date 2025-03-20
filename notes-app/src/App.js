import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login setCurrentPage={setCurrentPage} />;
      case "signup":
        return <Signup setCurrentPage={setCurrentPage} />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Contact />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
