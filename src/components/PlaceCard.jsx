import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const PlaceCard = ({ place }) => {
    const { food } = useContext(AppContext);
    
    // revisit this
    let foodNear = [];
    if(food && food[place.zone]) {
        foodNear = food[place.zone];
    } else if(food && food[place.id]) {
        foodNear = food[place.id];
    }

    return (
        <div className="bg-white border-2 border-gold rounded-lg p-4 shadow mb-4">
            <h3 className="text-xl font-bold text-darkGreen mb-1">{place.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{place.category.toUpperCase()}</p>
            <div className="flex justify-between text-sm">
                <span>Cost: ₹{place.entryCost}</span>
                <span>Duration: {place.duration}h</span>
            </div>
            
            {foodNear.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs font-bold text-darkGreen mb-1">Eats nearby:</p>
                    {foodNear.map((f, i) => (
                        <div key={i} className="text-xs flex justify-between">
                            <span>{f.name} ({f.type})</span>
                            <span>₹{f.cost}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
