import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Navbar, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navigationbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="logo-container">
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">

            </div>
            <div className="col-md-4 m-auto">
              <div className="d-flex justify-content-center">
                <div className="circle circle-fb ml-3">
                  <img src={process.env.PUBLIC_URL + "/images/fb.svg"} className="img-fluid" />
                </div>
                <div className="circle circle-insta ml-3">
                  <img src={process.env.PUBLIC_URL + "/images/insta.svg"} className="img-fluid" />
                </div>
                <div className="circle circle-linked ml-3">
                  <img src={process.env.PUBLIC_URL + "/images/link.svg"} className="img-fluid" />
                </div>
                <div className="circle circle-yt  ml-3">
                  <img src={process.env.PUBLIC_URL + "/images/yt.svg"} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR FOR ADMIN*/}

      {localStorage.getItem('token') && localStorage.getItem('role') === 'Admin'
        ? (<div>

          < nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                TRANQULITY
                     
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>


                <li className='nav-item'>
                  <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
        </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/addpackage' className='nav-links' onClick={closeMobileMenu}>
                    Add Packages
        </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/addproduct' className='nav-links' onClick={closeMobileMenu}>
                    Add Products
        </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/showallpackages' className='nav-links' onClick={closeMobileMenu}>
                    Show Packages
        </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/showallproduct' className='nav-links' onClick={closeMobileMenu}>
                    Show Products
        </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/showallcontact' className='nav-links' onClick={closeMobileMenu}>
                    Show Contact
        </Link>
                </li>

                

              </ul >
              <div className="Dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    MEMBER LOGIN
                      </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <button onClick={logout}>Logout
                    </button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>


            </div >
          </nav >
        </div>)

        // ..... FOR CUSTOMER ................


        : localStorage.getItem('token') && localStorage.getItem('role') === 'Customer'
          ? (<div>

            < nav className='navbar'>
              <div className='navbar-container'>

                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                  </Link>
                  </li>


                  <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/showallpackages' className='nav-links' onClick={closeMobileMenu}>
                      Show Packages
                     </Link>
                  </li>
                 
                  <li className='nav-item'>
                    <Link to='/Showallproduct' className='nav-links' onClick={closeMobileMenu}>
                      Show Product
                     </Link>
                  </li>


                  <li className='nav-item'>
                    <Link to='/showMyBookings' className='nav-links' onClick={closeMobileMenu}>
                      My bookings
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/showMyCarts' className='nav-links' onClick={closeMobileMenu}>
                      MyCart
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                      Profile
                     </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      Contact
        </Link>
                  </li>
                
                 

                
                </ul >
                <div className="Dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      MEMBER LOGIN
                      </Dropdown.Toggle>

                    <Dropdown.Menu>
                    
                      <button onClick={logout}>Logout</button>
                      
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div >
            </nav >
          </div>)


          // ..... FOR NON USER ................



          : (<div>

            < nav className='navbar'>
              <div className='navbar-container'>
                
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
</Link>
                  </li>


                  <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                      About
</Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                      Blogs
              
</Link>
                  </li>

             

                  <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      Contact
</Link>
                  </li>
               

                  <li>
                    <Link
                      to='/sign-up'
                      className='nav-links-mobile'
                      onClick={closeMobileMenu}
                    >
                      Sign Up
</Link>
                  </li>
                </ul >
                <div className="Dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      MEMBER LOGIN
              </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link className="nav-link" to="/login"><h3>LOGIN</h3></Link>
                      <Link className="nav-link" to="/register"><h3>REGISTER</h3></Link>
                     
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div >
            </nav >
          </div>)
      }

    </>
  );
}

export default Navigationbar;
