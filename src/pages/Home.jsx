import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div>
      <HeroSection />

      <section className="features">
        <h2>Why Study For Funny?</h2>

        <div className="feature-container">
          <FeatureCard
            title="Learn"
            description="Learn programming and technology step by step."
          />

          <FeatureCard
            title="Practice"
            description="Practice what you learn by building small projects."
          />

          <FeatureCard
            title="Have Fun"
            description="Learning does not have to be boring."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;