import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { PlaceCard } from '../components/PlaceCard';
import { TransportCard } from '../components/TransportCard';
import { CostBreakdown } from '../components/CostBreakdown';
import { MapWrapper } from '../components/MapWrapper';

export default function Itinerary() {
    const { itinerary } = useContext(AppContext);
    const nav = useNavigate();

    if(!itinerary) {
        return <Navigate to="/home" />;
    }

    const { places, travelLegs, totalCost, insight } = itinerary;

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <button onClick={() => nav('/home')} className="text-sm font-bold text-darkGreen mb-4 underline">
                &larr; Back to Planner
            </button>
            
            <h2 className="text-3xl font-bold text-darkGreen mb-6">Your Smart Trip</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1: Timeline */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b pb-2">Itinerary Timeline</h3>
                    {places.map((place, idx) => (
                        <React.Fragment key={idx}>
                            <PlaceCard place={place} />
                            
                            {/* show travel if not last item */}
                            {idx < places.length - 1 && travelLegs[idx] && (
                                <TransportCard time={travelLegs[idx].time} cost={travelLegs[idx].cost} />
                            )}
                        </React.Fragment>
                    ))}
                    
                    {places.length === 0 && (
                        <p className="text-red-500 font-bold">Try increasing budget or time constraints. No places fit.</p>
                    )}

                    <CostBreakdown totalCost={totalCost} insight={insight} />
                </div>
                
                {/* Column 2: Map */}
                <div className="h-[600px] md:sticky md:top-4 border-4 border-gold rounded-xl overflow-hidden shadow-xl">
                    <MapWrapper places={places} />
                </div>
            </div>
        </div>
    )
}
