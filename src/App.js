import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [sidebarVisibilty, setSidebarVisibility] = useState(false);
  const [sidebarBtnIcon, setSidebarBtnIcon] = useState(false);

  function toggleSidebar() {
    setSidebarVisibility(!sidebarVisibilty);
    setSidebarBtnIcon(!sidebarBtnIcon);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} sidebarBtnIcon={sidebarBtnIcon} />
        <div className="container">
          {sidebarVisibilty && <Sidebar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
