# Mind-Crafters
hackathon halfway progress
CityPilot AI 
A smart trip planner I built for Nashik. You put in your budget, how many hours you have, and where you're starting from — and it builds you a full itinerary with places to visit, food spots, how to get there, and what it'll cost.
Still working on a few things but the core is done and working.

Why I made this
I'm from Nashik and honestly every travel app either shows you wrong info or is just a list of places with no logic. I wanted something that actually thinks — like if you only have ₹400 and 3 hours, don't show me a vineyard that costs ₹800 to enter. So I built my own thing.
No Google Maps, no paid APIs. Everything runs free.

What it does

Takes your budget, time, and starting area as input
Figures out which places actually fit within your constraints
Scores places by how close they are + how good they are
Picks the best route (max 5 places, sorted by score)
Shows travel time estimates based on which transport makes sense for your budget
Gives you food suggestions near each stop
Hotel suggestions if you're going far
Full cost breakdown at the end
Interactive map with all the stops plotted


Tech used

React + Vite
Tailwind CSS
Leaflet + OpenStreetMap (free maps, no API key needed)
React Router v6
localStorage for auth (no backend)


How to run it
bashgit clone https://github.com/yourusername/citypilot-ai.git
cd citypilot-ai
npm install
npm run dev
then open http://localhost:5173
that's it honestly. no env files, no API keys, nothing to configure.

Folder structure
src/
├── auth/
│   └── authUtils.js         # login/signup using localStorage
├── context/
│   └── AppContext.jsx        # global state, loads all JSON data
├── engine/
│   ├── haversine.js          # distance calculation
│   ├── budgetFilter.js       # filters places by budget tier
│   ├── scorer.js             # ranks places by priority + distance
│   ├── travelTime.js         # calculates time + cost per leg
│   ├── insightGen.js         # generates the trip summary message
│   └── planner.js            # main brain, puts it all together
├── _components/
│   ├── Navbar.jsx
│   ├── PlaceCard.jsx
│   ├── TransportCard.jsx
│   ├── FoodCard.jsx
│   ├── CostBreakdown.jsx
│   └── MapWrapper.jsx
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Home.jsx
│   └── Itinerary.jsx
public/
└── data/
    ├── places.json           # 12 Nashik attractions
    ├── transport.json        # starting locations + transport modes
    ├── food.json             # food spots by area and place
    ├── hotels.json           # stay options by zone
    └── busstops.json         # nearby bus stops per area

How the planning logic works
It's not ChatGPT or any external model. I built a scoring system myself.
Each place gets a score like this:
score = place.priority - (distance from user / 5)
So a highly rated place that's far away might lose to a slightly lower rated place that's 5 mins away. Makes sense practically.
Then it greedily picks places one by one until time or budget runs out. Transport mode depends on your budget tier — low budget gets rickshaw/bus suggestions, high budget gets cab.
It's basic but it actually works well for the city.

Places covered
All major spots in and around Nashik:

Trimbakeshwar Temple
Pandavleni Caves
Sula Vineyards
Ramkund
Anjneri Hill
Dugarwadi Waterfall
and a few more

If you're starting from outside the city (like Igatpuri) it adjusts — fewer places, longer travel times, different cost estimates.

Auth
Super simple. Just sign up with any name/email/password and it saves to localStorage. No backend, no JWT, nothing fancy. Session stays until you log out.
Wasn't the focus of this project, might add a real backend later idk.

UI
Dark green, gold, cream color scheme. Went for something that feels a little premium but not overdone. Two column layout on desktop, stacks on mobile.
Map uses a CSS invert trick to make OpenStreetMap look dark themed:
cssfilter: invert(1) hue-rotate(180deg)
Looks surprisingly good for a free map lol.

Known issues / TODO

 Bus stop feature is there in the data but not fully wired to the UI yet
 The scorer could be smarter (right now distance weight is hardcoded)
 Would be nice to add real time / live transport info someday
 Hotel section UI needs work
 Haven't tested properly on very small screens



