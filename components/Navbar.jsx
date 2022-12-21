import React from 'react'
import { TiArrowRight } from 'react-icons/ti'

const Navbar = () => {
  return (
    <nav className="w-full justify-between items-center flex py-12  px-5 "> 

            <h1 className="text-black text-4xl px-3 lg:hidden font-kaushan"> prism </h1>

        <div className="flex-row flex px-5 text-black items-center justify-center text-lg lg:flex-grow lg:justify-end lg:px-60 xl:px-80">

            <h2 className='px-2 font-light' >Have an Account?</h2>

            <button className="font-semibold">
                Log in 
            </button>
            <TiArrowRight className='mt-[.2rem]' size={24} />

        </div>
        
  
    </nav>
  )
}

export default Navbar