import React from "react";
import TypingEffect from "./TypingEffect";


function App() {

  return(
 <div>
      {/* Star Background */}
      <div className="stars">
        <span style={{ left: "20%", animationDuration: "20s" }}></span>
        <span style={{ left: "50%", animationDuration: "40s" }}></span>
        <span style={{ left: "70%", animationDuration: "25s" }}></span>
        <span style={{ left: "90%", animationDuration: "30s" }}></span>
      </div>

      {/* Navbar */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="home">
        <h1>Kenedy Igayac</h1>
          <TypingEffect />
        <p className="typing" id="typing"></p>
        <a href="#project">
          <button className="btn">View My Work</button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <form>

        </form>
      </section>
    </div>
  );
}

export default App
