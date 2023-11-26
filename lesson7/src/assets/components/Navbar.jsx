/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";




export default function Navbar({ login, setLogin }) {
  const handleLoginClick = () => {
    setLogin(!login);
  };

  return (
    <div>
      <ul className="nav">
        <li>
          <Link to='/'>
            <h2>HOME</h2>
          </Link>
        </li>
        <li>
        <Link to='/about'>
            <h2>ABOUT</h2>
          </Link>
        </li>
        <li>
        <Link to='/add'>
            <h2>ADD</h2>
          </Link>
        </li>
        <li>
        <Link to='/servise'>
            <h2>SERVISE</h2>
          </Link>
        </li>
        <li>
        <Link to='/products'>
            <h2>PRODUCTS</h2>
          </Link>
        </li>
        <li>
          <Link to='login'>
          <button className="nav-btn" onClick={handleLoginClick}>
            {login ? 'KIRISH' : 'CHIQISH'}
          </button>
          </Link>
          
        </li>
      </ul>
    </div>
  );
}