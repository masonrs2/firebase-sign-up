import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
            router.push('/')
           

           
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    <div className="py-12 h-screen w-full bg-gradient-to-br from-purple-200 via-pink-100-100 to-white text-black flex justify-center items-center flex-col gap-8">
       <h1 className="text-xl font-light lg:max-w-none">Thank you for signing in. Click below to return to the Sign Up page! </h1>

       <button onClick={() => router.push('/')} className="bg-black text-white rounded-md w-44 h-9">Sign Up</button>
    </div>
  )
}

export default Login