import { Routes } from "react-router";
import { Route } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
