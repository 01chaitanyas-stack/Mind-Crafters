import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { generatePlan } from '../engine/planner';

const Home = () => {
    const { places, transport, setItinerary } = useContext(AppContext);
    
    // cbs default
    const [startLat, setStartLat] = useState(19.9975);
    const [startLng, setStartLng] = useState(73.7898);
    const [budgetStr, setBudgetStr] = useState('medium');
    const [hours, setHours] = useState(8);
    
    const nav = useNavigate();

    const doGenerate = () => {
        // console.log("places length", places.length);
        if(places.length === 0) {
            alert("Data still loading, please wait 1 sec");
            return;
        }

        let planRes = generatePlan(places, transport, {
            startLat, startLng, budgetStr, hours
        });
        
        setItinerary(planRes);
        nav('/itinerary');
    };

    return (
        <div className="container mx-auto p-4 max-w-xl">
            <h2 className="text-3xl font-bold text-darkGreen mb-6 mt-8">Plan Your Nashik Trip</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="mb-4">
                    <label className="block text-sm font-bold text-darkGreen mb-2">Starting Location</label>
                    <select 
                        className="w-full border p-2 rounded"
                        onChange={(e) => {
                            let val = e.target.value;
                            if(val === 'cbs') { setStartLat(19.9975); setStartLng(73.7898); }
                            if(val === 'station') { setStartLat(19.952); setStartLng(73.840); }
                        }}
                    >
                        <option value="cbs">Central Bus Stand (CBS)</option>
                        <option value="station">Nashik Road Railway Station</option>
                    </select>
                </div>
                
                <div className="mb-4">
                    <label className="block text-sm font-bold text-darkGreen mb-2">Budget Level</label>
                    <div className="flex gap-2">
                        {['low', 'medium', 'high'].map(b => (
                            <button 
                                key={b}
                                onClick={() => setBudgetStr(b)}
                                className={`flex-1 py-2 rounded text-center capitalize border ${budgetStr === b ? 'bg-darkGreen text-cream' : 'bg-gray-100 text-darkGreen'}`}
                            >
                                {b}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-bold text-darkGreen mb-2">Time Available (Hours): {hours}</label>
                    <input 
                        type="range" 
                        min="2" max="12" 
                        value={hours} 
                        onChange={e => setHours(parseInt(e.target.value))}
                        className="w-full accent-gold"
                    />
                </div>
                
                <button 
                    onClick={doGenerate}
                    className="w-full bg-gold text-darkGreen font-bold py-3 rounded-lg hover:bg-darkGreen hover:text-cream transition-colors text-lg shadow-md"
                >
                    Generate Smart Itinerary
                </button>
            </div>
        </div>
    );
};

export default Home;
