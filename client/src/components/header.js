// Header component
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 text-white">
            <h1 className="text-lg font-bold">Wicked Fabrication</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">About</Link></li>
                    <li><Link to="/services" className="hover:underline">Services</Link></li>
                    <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;