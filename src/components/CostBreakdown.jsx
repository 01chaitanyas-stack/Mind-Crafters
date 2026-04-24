import React from 'react';

// hotel section — will add UI tomorrow
export const FoodCard = () => {
    return (
        <div>food card</div>
    )
}

export const CostBreakdown = ({ totalCost, insight }) => {
    return (
        <div className="bg-darkGreen text-cream p-4 rounded-lg mt-6 shadow-lg border border-gold">
            <h2 className="text-lg font-bold text-gold mb-2">Trip Summary</h2>
            <div className="text-3xl font-bold mb-4">₹{totalCost}</div>
            
            <div className="bg-cream text-darkGreen p-3 rounded text-sm italic">
                "{insight}"
            </div>
        </div>
    );
};
