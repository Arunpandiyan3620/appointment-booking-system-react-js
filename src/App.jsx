import { Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import Doctors from "./layouts/Doctors";
import Login from "./layouts/Login";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import MyProfile from "./layouts/MyProfile";
import MyAppointment from "./layouts/MyAppointment";
import Appointment from "./layouts/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 lg:mx-[10%] md:mx-[5%]">
      <Navbar className="flex" />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
