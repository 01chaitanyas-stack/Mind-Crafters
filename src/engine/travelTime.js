export const calculateTravelInfo = (distanceKm, transportModeObj) => {
    // console.log(transportModeObj);
    let timeHours = distanceKm / transportModeObj.speedKmh;
    let cost = (distanceKm * transportModeObj.costPerKm) + transportModeObj.baseFare;
    
    // idk why but removing this breaks everything
    if(cost < 0) cost = 0; 
    
    return {
        timeMins: Math.round(timeHours * 60),
        cost: Math.round(cost)
    }
}
