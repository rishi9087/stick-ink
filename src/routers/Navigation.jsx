import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Gallery from '../pages/gallery/Gallery';
import Catalogue from '../pages/catalogue/Catalogue';
import CatalogueCar from '../pages/cataloguecar/CatalogueCar';
import Profile from '../pages/profile/Profile';
import Faq from '../pages/faq/Faq';

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
            </Routes>
        </Router>
    );
}

export default Navigation;