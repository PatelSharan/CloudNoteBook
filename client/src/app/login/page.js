"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {

    const [showPassword, setShowPassword] = useState(false)

    const [passValue, setPassValue] = useState('')

    const passInput = (e) => {
        setPassValue(e.target.value)
    }

    return (
        <>
            <section class="text-gray-600 body-font ">
                <div class="container px-5 py-12 flex items-center">
                    <div class="sm:w-[350px] shadow-md border rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-xs text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-xs text-gray-600">Password</label>
                            <input type={showPassword ? 'text' : 'password'} id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou t" onChange={passInput} />
                            {/* If Password has Value then Login */}
                            {passValue ? <button>
                                {/* If ShowPassword the Login */}
                                {!showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-fill cursor-pointer absolute right-3 bottom-3" viewBox="0 0 16 16" onClick={() => { { !showPassword ? setShowPassword(true) : setShowPassword(false) } }}>
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill cursor-pointer absolute right-3 bottom-3" viewBox="0 0 16 16" onClick={() => { { !showPassword ? setShowPassword(true) : setShowPassword(false) } }}>
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg>}
                            </button> : <button></button>}
                        </div>
                        <span className='text-xs text-end mb-3 text-blue-700 font-semibold hover:underline cursor-pointer'>Forgot Password ?</span>
                        <button class="text-white bg-slate-700 border-0 py-2 px-8 focus:outline-none hover:bg-slate-800 rounded text-sm">Login</button>
                        <p class="text-xs text-gray-500 mt-3">Don't Have An Account ? <Link className='text-blue-700 cursor-pointer hover:underline font-semibold' href={'/signup'}>SignUp</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page