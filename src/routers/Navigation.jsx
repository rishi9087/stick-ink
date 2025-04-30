import { HashRouter as Router, Route, Routes, } from 'react-router-dom'; //for production
// import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; //for dev


import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Gallery from '../pages/gallery/Gallery';
import Catalogue from '../pages/catalogue/Catalogue';
import CatalogueCar from '../pages/cataloguecar/CatalogueCar';
import Profile from '../pages/profile/Profile';
import Faq from '../pages/faq/Faq';
import Billing from '../pages/billing/Billing';
import AdminRegister from '../pages/control panel/Register';
import AdminLogin from '../pages/control panel/Login';
import Dashboard from '../pages/control panel/Dashboard';
import Products from '../pages/control panel/Products';
import Vehicle from '../pages/control panel/Vehicle';

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/cataloguecar" element={<CatalogueCar />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/adminregister" element={<AdminRegister />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/vehicle" element={<Vehicle />} />
            </Routes>
        </Router>
    );
}

export default Navigation;