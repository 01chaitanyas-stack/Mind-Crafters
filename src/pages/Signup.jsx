import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../auth/authUtils';

export default function Signup() {
    const [username, setuser] = useState('');
    const [pwd, setpwd] = useState('');
    const nav = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if(username && pwd) {
            createUser(username, pwd);
            alert("Signup success. Try login!");
            nav('/');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gold max-w-sm w-full">
                <h2 className="text-2xl font-bold text-darkGreen mb-6 text-center">Create Pilot Account</h2>
                <form onSubmit={handleSignup} className="flex flex-col gap-4">
                    <input 
                      type="text" 
                      placeholder="Username" 
                      value={username} 
                      onChange={e=>setuser(e.target.value)} 
                      className="border p-2 rounded focus:outline-none focus:border-gold"
                      required
                    />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={pwd} 
                      onChange={e=>setpwd(e.target.value)} 
                      className="border p-2 rounded focus:outline-none focus:border-gold"
                      required
                    />
                    <button type="submit" className="bg-gold text-darkGreen py-2 rounded font-bold hover:bg-darkGreen hover:text-cream transition-colors">
                        Sign Up
                    </button>
                    <p className="text-sm text-center text-gray-500">
                        <Link to="/">Back to Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
