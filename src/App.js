import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Homefirst from "./components/homefirst/Homefirst";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Destination from "./components/Destinations/Destination";
import Offers from "./components/offers/Offers";
import Contact from "./components/contact/Contact";
import Blogs from "./components/blogs/Blogs";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homefirst />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
