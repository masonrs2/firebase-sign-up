import React from 'react'
import GoogleButton from 'react-google-button'
import Link from 'next/link'
import { UserAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import { data, clients } from '../../assets/constants/metadata'
import { AiFillCheckCircle } from 'react-icons/ai'
import Image from 'next/image'
import airbnb from "../../assets/airbnb.png"
import binance from "../../assets/binance.png"
import dropbox from "../../assets/dropbox.png"
import coinbase from "../../assets/coinbase.png"
import { useRouter } from 'next/router'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp, googleSignIn, githubSignIn } = UserAuth()
    const router = useRouter()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleGithubSignIn = async () => {
        try {
            await githubSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            router.push('/components/Login')
           

           
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    <div className="py-12 h-screen w-full lg:flex lg:flex-row justify-between  lg:justify-evenly ">
        <div className="hidden lg:flex lg:flex-col px-6 xl:px-52 2xl:px-[280px]">
            <h1 className="text-black text-4xl py-9 font-kaushan"> prism </h1>
            <div>

            <h2 className="text-black font-light text-xl w-[26rem] space-y-5 mb-14">Create a Scale account to get started with our platform!
</h2>
                {
                    data.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            <div className="flex flex-row">
                                <AiFillCheckCircle size={20} className="text-black mt-1" />
                                <p className="px-3 text-black text-lg font-medium">{item.header}</p>
                            </div>

                            <p className="px-[2rem] mt-4 mb-3 text-lg font-light text-slate-600">{item.content1}</p>
                            <p className="px-[2rem] font-light text-slate-600 mb-12 text-lg">{item.content2}</p>


                        </div>
                    ))
                }
                            <div className="py-4 flex flex-row gap-10 justify-center items-center px-4 md:px-2 lg:px-0">
                               <Image src={binance} className="mt-2" width={100} height={100}  />
                               <Image src={coinbase} width={100} height={100} />
                               <Image src={dropbox} width={100} height={100}  />
                               <Image src={airbnb} width={100} height={100} />
                            </div>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center xl:mb-32 xl:mr-60 lg:px-20 lg:mb-32">
            <h2 className="text-black py-16 text-2xl font-light mr-16">
                Create your account
            </h2>

            <div className="flex flex-row mb-7">

                    <input type="checkbox" className="bg-white hover:bg-slate-400" />
                    
                <p className="text-black w-[25rem] px-4 ">
                    I agree to Prism's <span className="text-blue-500">Corporate Services Agreement</span> and acknowledge Prims's <span className="text-blue-500">Privacy Policy</span> to use Prism's services.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col mr-0 gap-4 ">
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className="bg-gray-100 rounded-lg w-96 h-10 px-10 text-gray-500 outline-none" />
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password' 
                    className="bg-gray-100 rounded-lg w-96 h-10 px-10 outline-none text-gray-500" />

                    <Link 
                    href="/components/Login"
                    key="login">
                        <button 
                        onClick={handleSubmit}
                        className="bg-black w-96 rounded-full h-10 text-lg " >
                                Create Account
                        </button>
                    </Link>
            </form>

            
            <p className="text-gray-400 mt-5">or</p>
            <div className="py-5 rounded-md flex flex-row gap-4 w-[460px] ">
                <GoogleLoginButton onClick={handleGoogleSignIn} className="" />
                <GithubLoginButton onClick={handleGithubSignIn} size='' />
            </div>
        </div>
    </div>
  )
}

export default Signup