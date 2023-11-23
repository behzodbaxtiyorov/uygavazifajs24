
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import Signin from './components/Signin';

const getLocalStorage = () => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [];
};

function App() {

  const [isSignIn, setIsSignin] = useState(false)
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');

  const [user, setUser] = useState(getLocalStorage());

  const handSignIn = (e) => {
    e.preventDefault();
    const newUser = {title:name, mail:email};
    setUser([...user, newUser])
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user));
  }, [user]);
 
  return (
    <>
      <Navbar isSignIn={isSignIn} setIsSignin={setIsSignin} />
      
      {isSignIn && <Signin
                          name={name}
                          setName={setName}
                          email={email}
                          setEmail={setEmail}
                          handSignIn={handSignIn}
      /> }
    </>
  )
}

export default App
