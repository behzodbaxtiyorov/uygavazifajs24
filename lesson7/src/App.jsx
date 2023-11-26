/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Login from './assets/components/Login'
import { getStore, getUser } from './utils'
import { uid } from 'uid'
import Products from './assets/components/Products'
import Add from './assets/components/Add'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Servise from './pages/Servise'
import Error from './pages/Error'
import ProtectedRoute from './assets/components/ProtectedRoute'


function App() {

  const id = uid();
 

  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');

  const [editID, setEditId] = useState(null);

  const [edit, setEdit] = useState(false);


  

  const [user,setUser] = useState(getUser('users'));
  const [products,setProducts] = useState(getStore('products'));
  

  const handleSubmit = () => {
    // e.preventDefault();
    const newUser = {id: id, uname: name, uemail: email};
    setUser( newUser);
  }
  const addProduct = () => {
    if (!pname && !price) {
      console.log('err');
    } else if (pname && edit) {
      setProducts(products.map((item) => {
        if (item.id === editID) {
            return {...item, name: pname, price:price}
        }
        return item
        }))
    } else {
      const newProduct ={id:id,  name: pname, price: price };
      setProducts([...products,newProduct])

    }
  }

  const deleteItem = (id) => {
    const newItem = products.filter((item) => item.id !== id)
    setProducts(newItem)
  }

  const editItem = (id) => {
    const newItem = products.find((item) => item.id === id);
    setEdit(true);
    setEditId(id);
    setPname(newItem.name)
    setPrice(newItem.price)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('products', JSON.stringify(products));
   
  }, [user, products])

  return (
    <>
      
    {/* <h2>{users.uname && "welcome"}{users.uname }</h2> */}

    
     <Navbar login={login} setLogin={setLogin} />

       <Routes>
         <Route path='login' element={login && <Login
        name={name} 
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
     />}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/servise' element={<Servise/>}/>

       <Route path='/products' element={
        <ProtectedRoute user={user}>
            <Products editItem={editItem} setEdit={setEdit} products={products} deleteItem={deleteItem}  />
        </ProtectedRoute>
       }/>
       


       <Route path='/add' element={     <Add editItem={editItem} edit={edit} setEdit={setEdit} pname={pname} setPname={setPname} price={price} setPrice={setPrice} addProduct={addProduct} />}/>
       <Route path='*' element={<Error/>}/>
       </Routes>

     
       
    </>
  )
}

export default App;
