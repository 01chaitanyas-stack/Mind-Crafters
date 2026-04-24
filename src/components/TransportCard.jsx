import React from 'react';
import { Car } from 'lucide-react'; // not sure if we have lucide-react but trying

export const TransportCard = ({ time, cost }) => {
    return (
        <div className="flex flex-col items-center my-2 text-gold">
            <div className="h-4 w-0.5 bg-gold mb-1"></div>
            <div className="border border-gold rounded px-3 py-1 bg-cream text-darkGreen text-xs flex items-center gap-2">
                <span>{time} mins</span> • <span>₹{cost}</span>
            </div>
            <div className="h-4 w-0.5 bg-gold mt-1"></div>
        </div>
    );
};
