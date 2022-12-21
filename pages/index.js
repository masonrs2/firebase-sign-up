import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../context/AuthContext'

import Signup from '../components/Signup'
import Login from './Pages/Login'

export default function Home() {
  return (
    
    <div className=" w-full h-full bg-gradient-to-br from-purple-200 via-pink-100-100 to-white overscroll-y-none  overflow-y-none">

      <AuthContextProvider>
        <Navbar />
        <Signup />
      </AuthContextProvider>

       
  
    </div>
  )
}

