import { useState } from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {


    return (
        <div className="container mx-auto font-poppins min-h-screen ">
            <Navbar />

            <div className="max-w-lg mx-auto py-16">
                <form className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-6">Login to WarmHug</h2>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-semibold text-[#1E3A8A]">Email</label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-lg font-semibold text-blue-900">Password</label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="text-center mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Login
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-[#1E3A8A]">
                            Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
                        </p>
                        <p className='text-sm text-[#1E3A8A]'>or</p>
                        <button className='btn text-[15px] mt-2'><FaGoogle size={18} /> Login With Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
