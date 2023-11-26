/* eslint-disable react/prop-types */



export default function Login({ name, setName, email, setEmail, handleSubmit }) {
  const handleLogin = () => {
    handleSubmit();
  };

  return (
    <div  className="login">
      <form action="">
        <input className="login-inp"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input className="login-inp2"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          {name && email ? 'logout' : 'login'}
        </button>
      </form>
    </div>
  );
}