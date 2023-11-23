/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Navbar({ isSignIn, setIsSignin }) {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>
          <button onClick={() => setIsSignin(!isSignIn)}>sign up</button>
        </li>
      </ul>
    </div>
  );
}