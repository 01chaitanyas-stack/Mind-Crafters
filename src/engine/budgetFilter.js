export const getBudgetTier = (budgetStr) => {
    // maybe we change these values later
    if(budgetStr === 'low') return 500;
    if(budgetStr === 'medium') return 2000;
    return 5000; 
}

export const filterPlacesByBudget = (places, maxBudget) => {
    let finalArr = [];
    for(let i=0; i<places.length; i++) {
        if(places[i].entryCost <= maxBudget) {
            finalArr.push(places[i]);
        }
    }
    return finalArr;
}
