import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Events from './pages/Events/Events'
import './App.css'
import Contact from "./pages/contact/Contact";
import Schedule from "./pages/schedule/Schedule";
import ScrollToTop from "./Components/ScrollToTop";
import SelectEvents from "./pages/Select events/SelectEvents";



function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/events/*" element={<Events />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/select-events" element={<SelectEvents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
