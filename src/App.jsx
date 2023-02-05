import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

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
