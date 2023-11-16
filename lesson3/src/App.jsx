import { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';
import Navbar from './components/Navbar';
import Sagnin from './components/Sagnin';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    
        
    <Navbar setModal={setModal} />
    {modal ? <Sagnin /> :<Tours list={list} /> }
      
    </>
  );
}

export default App;