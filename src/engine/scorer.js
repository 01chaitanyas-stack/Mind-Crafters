import { getDistanceFromLatLonInKm } from './haversine.js';

export const scoreAndSortPlaces = (places, startLat, startLng) => {
    // console.log("places to score", places.length)
    
  let scored = places.map(p => {
    let dist = getDistanceFromLatLonInKm(startLat, startLng, p.lat, p.lng);
    // priority - distance/5
    let score = p.priority - (dist/5);
    return {
        ...p,
        distance: dist,
        score: score
    }
  });

  // sort descending
  scored.sort((a,b) => b.score - a.score);

  return scored;
}
