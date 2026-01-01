import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPagesDropdownOpen(false);
        setIsBlogDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePagesDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
    setIsBlogDropdownOpen(false); // Close blog dropdown if open
  };

  const toggleBlogDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
    setIsPagesDropdownOpen(false); // Close pages dropdown if open
  };

  const closeAllDropdowns = () => {
    setIsPagesDropdownOpen(false);
    setIsBlogDropdownOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="/logo.png" alt="Skill Logo" height="35px" width="35px" />
            <p>Skill</p>
          </div>
          <div className="nav_list_right" ref={dropdownRef}>
            <ul className="nav_list">
              <li>
                <Link to="/" className={isActive('/')}>
                  home
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive('/about')}>
                  about
                </Link>
              </li>
              <li>
                <Link to="/service" className={isActive('/service')}>
                  service
                </Link>
              </li>
              <li>
                <Link to="/courses" className={isActive('/courses')}>
                  courses
                </Link>
              </li>
              
              {/* Pages Dropdown */}
              <li className={`dropdown ${isPagesDropdownOpen ? 'open' : ''}`}>
                <Link 
                  to="#" 
                  className={`dropdown-toggle ${isActive('/pages')}`}
                  onClick={togglePagesDropdown}
                >
                  pages <i className="fa-solid fa-caret-down"></i>
                </Link>
                {isPagesDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/gallery" className="dropdown-item" onClick={closeAllDropdowns}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="dropdown-item" onClick={closeAllDropdowns}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown-item" onClick={closeAllDropdowns}>
                        Signup
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Blog Dropdown */}
              <li className={`dropdown ${isBlogDropdownOpen ? 'open' : ''}`}>
                <Link 
                  to="#" 
                  className={`dropdown-toggle ${isActive('/blog')}`}
                  onClick={toggleBlogDropdown}
                >
                  blog <i className="fa-solid fa-caret-down"></i>
                </Link>
                {isBlogDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/blog" className="dropdown-item" onClick={closeAllDropdowns}>
                        Blog List
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="dropdown-item" onClick={closeAllDropdowns}>
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/contact" className={isActive('/contact')}>
                  contact
                </Link>
              </li>  
            </ul>
            <Link to="/signup" className="btn_1_theme">apply now</Link>
          </div>     
        </div> 
      </div>
    </header>
  );
};

export default Header;