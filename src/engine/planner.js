import { filterPlacesByBudget, getBudgetTier } from "./budgetFilter";
import { scoreAndSortPlaces } from "./scorer";
import { generateInsight } from "./insightGen";
import { calculateTravelInfo } from "./travelTime";

export const generatePlan = (places, transportModes, params) => {
  // params: { startLat, startLng, budgetStr, hours }
  
  let budget = getBudgetTier(params.budgetStr);
  let filtered = filterPlacesByBudget(places, budget);
  
  let sorted = scoreAndSortPlaces(filtered, params.startLat, params.startLng);
  
  let remainingMins = params.hours * 60;
  
  let plan = [];
  let totalCost = 0;
  
  const cabMode = transportModes.find(t => t.id === 't3') || transportModes[0];
  
  /* old approach
    let plan = []
    sorted.forEach(p => {
      if(budget > p.entryCost) plan.push(p);
    });
    return plan;
  */
  
  // greedy approach
  for (let d = 0; d < sorted.length; d++) {
      let place = sorted[d];
      
      // calc travel 
      // i should probably use getting distance from current point, not start
      let dist = place.distance; // temp fix, using distance from start
      let tInfo = calculateTravelInfo(dist, cabMode);
      
      let placeMins = place.duration * 60;
      
      if(remainingMins >= (tInfo.timeMins + placeMins)) {
          plan.push({
            place: place,
            travelTime: tInfo.timeMins,
            travelCost: tInfo.cost
          });
          
          remainingMins -= (tInfo.timeMins + placeMins);
          totalCost += tInfo.cost + place.entryCost;
      }
  }
  
  return {
      places: plan.map(item => item.place),
      travelLegs: plan.map(item => ({ time: item.travelTime, cost: item.travelCost })),
      totalCost: totalCost,
      insight: generateInsight(plan.map(i => i.place))
  };
}
