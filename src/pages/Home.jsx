import Hero from "../components/Hero";
import ProductsSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div className="space-y-12 pb-16">
      <Hero />
      <AboutSection />
      <ProductsSection limit={3} />
    </div>
  );
};

export default Home;
