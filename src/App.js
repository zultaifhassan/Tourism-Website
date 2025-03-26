import { Route, Routes } from "react-router-dom";
import Homefirst from "./components/homefirst/Homefirst";
import About from "./components/About/About";
import Destination from "./components/Destinations/Destination";
import Offers from "./components/offers/Offers";
import Contact from "./components/contact/Contact";
import Blogs from "./components/blogs/Blogs";
import Transport from "./components/Transport/Transport";
import OffersDetail from "./components/offers/OffersDetail";
import Rentcar from "./components/Transport/RentCar/Rentcar";
import Dashboardlayout from "./Dashboard/Dashboardlayout";
import Dashboarddetail from "./Dashboard/dashboarddetail/Dashboarddetail";
import Homelayout from "./components/homefirst/Homelayout";
import Orders from "./Dashboard/dashboarddetail/orders/Orders";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="" element={<Homefirst />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="destination" element={<Destination />}></Route>
          <Route path="offers" element={<Offers />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="blog" element={<Blogs />}></Route>
          <Route path="transport" element={<Transport />}></Route>
          <Route path="offerdetail" element={<OffersDetail />}></Route>
          <Route path="rentcar" element={<Rentcar />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboardlayout />}>
          <Route path="" element={<Dashboarddetail />}></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
