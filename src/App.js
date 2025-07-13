import './App.css';
import Home from './routes/Home';
import Service from './routes/Service';
import { Route, Routes } from 'react-router-dom';
import DestinationList from './components/DestinationList';
import Admin from './routes/Admin';
import ContactUs from './components/ContactUs';
import AboutUs from './components/About';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/destination" element={<DestinationList />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
