import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUser, saveSession } from '../auth/authUtils';
import { AppContext } from '../context/AppContext';

function Login() {
    const [u, setU] = useState('');
    const [p, setP] = useState('');
    const { setUser } = useContext(AppContext);
    const nav = useNavigate();

    const doLogin = (e) => {
        e.preventDefault();
        // console.log("logging in", u);
        
        let found = getUser(u, p);
        if(found) {
            saveSession(found);
            setUser(found);
            nav('/home');
        } else {
            alert("Wrong credentials");
        }
    }

    return (
        <div className="h-screen flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-darkGreen max-w-sm w-full">
                <h2 className="text-3xl font-bold text-darkGreen mb-6 text-center">Login</h2>
                <form onSubmit={doLogin} className="flex flex-col gap-4">
                    <input 
                      type="text" 
                      placeholder="Username" 
                      value={u} 
                      onChange={e=>setU(e.target.value)} 
                      className="border p-2 rounded focus:outline-none focus:border-gold"
                    />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={p} 
                      onChange={e=>setP(e.target.value)} 
                      className="border p-2 rounded focus:outline-none focus:border-gold"
                    />
                    <button type="submit" className="bg-darkGreen text-cream py-2 rounded font-bold hover:bg-gold hover:text-darkGreen transition-colors">
                        Enter
                    </button>
                    <p className="text-sm text-center">
                        No account? <Link to="/signup" className="text-gold font-bold">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login;
