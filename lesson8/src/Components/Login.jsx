/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


// export default function Login(name, setName, psw, setPsw, login) {
     


//   return (
//     <div>
//         <form action="" onSubmit={login}>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
//             <input type="text" value={psw} onChange={(e) => setPsw(e.target.value)}  />
//             <button>login</button>
//         </form>
//     </div>
//   )
// }
export default function Login({ name, setName, psw, setPsw, login,  }) {
    const handleLogin = (e) => {
      e.preventDefault();
      login();
    };
  
    return (
      <div className="login-page">
        <form className="register-form" action="" onSubmit={handleLogin}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          />
          <br />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }