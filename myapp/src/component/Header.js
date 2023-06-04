import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Import icons from Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="logo">
              <h3 style={{ fontSize: '24px' }}>Mukund Pasi</h3> {/* Increase font size */}
            </div>
          </div>
          <div className="col">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <button className="btn btn-light">
                <FaSearch style={{ fontSize: '20px' }} /> {/* Increase icon size */}
                Search
              </button>
            </div>
          </div>
          <div className="col-auto">
            <nav className="navbar">
              <ul className="nav-items list-inline">
                <li className="nav-item list-inline-item">
                  <Link to="/" className="nav-link text-white" style={{ fontSize: '18px' }}>
                    <FaHome className="mr-2" /> {/* Add home icon */}
                    Home
                  </Link>
                </li>
                <li className="nav-item list-inline-item">
                  <Link to="/login" className="nav-link text-white" style={{ fontSize: '18px' }}>
                    <FaSignInAlt className="mr-2" /> {/* Add login icon */}
                    Login
                  </Link>
                </li>
                <li className="nav-item list-inline-item">
                  <Link to="/signup" className="nav-link text-white" style={{ fontSize: '18px' }}>
                    <FaUserPlus className="mr-2" /> {/* Add signup icon */}
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item list-inline-item cart">
                  <Link to="/cart" className="nav-link text-white" style={{ fontSize: '18px' }}>
                    <FaShoppingCart className="mr-2" /> {/* Add cart icon */}
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
