/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Signin({
  name,
  setName,
  email,
  setEmail,
  handSignIn
}) {
  return (
    <div>
      <form className="register-form" onSubmit={handSignIn}>
         <input className='inp1'
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
       <input className='inp1'
          type="text"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}