import Hero from "../components/Hero";
import ProductsSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection limit={3} />
    </>
  );
};

export default Home;
