import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import MedicineList from './components/MedicineList'
import CartPage from './components/CartPage'


const App = () => {
  const [searchQuery,setSearchQuery] = useState('');
  const [show,setShow] = useState(false);
  // const searchInputHandelar = (val)=>{
  //   setSearchQuery(val)
  // }
  return (
    <>
      <Header setSearchQuery={setSearchQuery} setShow={setShow}/>
      <MedicineList searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <CartPage show={show} setShow={setShow}/>
    </>
  )
}

export default App