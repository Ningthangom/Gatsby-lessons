import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({children}) => {
    console.log({children})
  return (
    <>
        <Navbar />
        {children}
        <br />
        <Footer />
    </>
  )
}

export default Layout