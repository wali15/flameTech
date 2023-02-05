import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/contacts/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
