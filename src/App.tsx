import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { Projects } from "./Views/Projects";
import { SnowEffect } from "./components/SnowEffect";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen gradient-bg-secondary text-foreground relative overflow-x-hidden">
      {/* Sophisticated Background System */}
      <div className="fixed inset-0 -z-20">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-neutral-50 to-accent-blue/5 dark:from-primary-950 dark:via-neutral-950 dark:to-accent-blue/5"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60 dark:opacity-40"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Snow Effect (optional) */}
      <SnowEffect />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
