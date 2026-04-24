import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { clearSession } from '../auth/authUtils';

const Navbar = () => {
    const { user, setUser } = useContext(AppContext);
    const nav = useNavigate();

    const doLogout = () => {
        clearSession();
        setUser(null);
        nav('/');
    }

    return (
        <nav className="bg-darkGreen text-cream p-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold text-gold">CityPilot AI</h1>
            <div>
                {user ? (
                    <div className="flex items-center gap-4">
                        <span>Hi, {user.username}</span>
                        <button onClick={doLogout} className="bg-gold text-darkGreen px-3 py-1 rounded">Logout</button>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;
