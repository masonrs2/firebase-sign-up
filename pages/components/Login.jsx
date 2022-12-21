import React from 'react'
import GoogleButton from 'react-google-button'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="py-12 h-screen w-full bg-gradient-to-br from-purple-200 via-pink-100-100 to-white ">
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-black py-16 text-2xl font-light mr-16">
                Create your account
            </h2>

            <div className="flex flex-row mb-7">

                    <input type="checkbox" className="bg-white hover:bg-slate-400" />
                    
                <p className="text-black w-[25rem] px-4 ">
                    I agree to Prism's <span className="text-blue-500">Corporate Services Agreement</span> and acknowledge Prims's <span className="text-blue-500">Privacy Policy</span> to use Prism's services.
                </p>
            </div>

            <form  className="flex flex-col mr-0 gap-4 ">
                <input 
                    placeholder='Enter your email'
                    className="bg-gray-100 rounded-lg w-96 h-10 px-10 outline-none" />
                <input 
                    placeholder='Enter your password' 
                    className="bg-gray-100 rounded-lg w-96 h-10 px-10 outline-none" />

                    <Link href="Login">
                        <button className="bg-black w-96 rounded-full h-10 text-lg " >
                                Create Account
                        </button>
                    </Link>
            </form>

            
            <p className="text-gray-400 mt-5">or</p>
            <div className="py-5 rounded-md flex flex-row">
                <GoogleButton className="" />
            </div>
        </div>
    </div>
  )
}

export default Login