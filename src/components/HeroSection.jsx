import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Learn Without Getting Bored</h1>

        <p>
          Study For Funny is a simple platform where you can
          learn technology, practice your skills and have fun.
        </p>

        <Link to="/courses" className="hero-button">
          Explore Courses
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;