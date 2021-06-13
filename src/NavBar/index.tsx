/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';

import './index.css';

const NavBar = () => {
  const history = useHistory();
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  const onLogOut = () => {
    localStorage.removeItem('isAuthenticated');
    history.push('/login');
  }

  useEffect(() => {
    const onRouteChange = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');

      if (isAuthenticated) {
        setUserAuthenticated(true);
      } else {
        setUserAuthenticated(false);
      }
    }
    history.listen(onRouteChange);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            People Interactive
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {
              isUserAuthenticated &&
              <li className="nav-item">
                <div
                  className="nav-links"
                  onClick={() => onLogOut()}
                >
                  Log Out <i className="fa fa-sign-out"></i>
                </div>
              </li>
            }
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
