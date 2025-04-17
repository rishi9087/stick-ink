import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


import Home from '../pages/home/Home';
import About from '../pages/about/About';

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default Navigation;