export const generateInsight = (itineraryPlaces) => {
  let cats = itineraryPlaces.map(p => p.category);
  
  if(cats.includes('wine')) {
      return "Get ready for a relaxing wine-tasting experience in the vineyards of Nashik!";
  }
  if(cats.includes('temple') && cats.includes('history')) {
      return "A beautiful blend of spiritual awakening and ancient history awaits.";
  }
  
  // hardcoded for now, fix later
  return "A wonderful journey exploring the best spots in Nashik.";
}
