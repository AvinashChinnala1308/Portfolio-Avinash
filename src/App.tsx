import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { Projects } from "./Views/Projects";
import { SnowEffect } from "./components/SnowEffect";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0F0F0F] text-[#F1F1F1] dark:bg-[#F1F1F1] dark:text-[#0F0F0F] relative">
      <Navbar />
      <SnowEffect />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

/* body {
  background: linear-gradient(to top, #000014, #0c0c5c);
  background-attachment: fixed;
  font-family: "Urbanist", sans-serif;
} */

export default App;
