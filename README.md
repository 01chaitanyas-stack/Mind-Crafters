# CityPilot AI

CityPilot AI is a smart travel planning web application for Nashik, India. It helps users generate optimized itineraries based on their preferences, budget, and available time, leveraging real data about places, transport, food, and hotels.

## Features

- 🗺️ **Smart Itinerary Generation:** Personalized trip plans based on start location, budget, and hours available.
- 🚕 **Transport Cost & Time Calculation:** Supports multiple transport modes (cab, bus, auto).
- 🍽️ **Food & Hotel Recommendations:** Suggests local food spots and hotels by area and budget.
- 📍 **Interactive Map:** Visualizes places and routes (Leaflet integration).
- 🔒 **Authentication:** Simple login/signup flow.
- 💸 **Cost Breakdown:** Detailed trip cost estimation.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Mapping:** Leaflet, React-Leaflet
- **Routing:** React Router
- **State Management:** React Context API

## Data Sources

- `public/data/places.json` — Tourist places in Nashik
- `public/data/transport.json` — Transport modes and fares
- `public/data/food.json` — Food recommendations by area
- `public/data/hotels.json` — Hotel options by area and tier
- `public/data/busstops.json` — Major bus stops

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/01chaitanyas-stack/Mind-Crafters.git
cd Mind-Crafters
npm install
```

### Running Locally

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173).

## Usage

1. **Sign up or log in.**
2. **Enter your starting location, budget, and available hours.**
3. **Generate your itinerary.**
4. **View your trip plan, cost breakdown, and map.**

## Project Structure

- `src/` — React components, pages, context, and engine logic
- `public/data/` — Static data files for places, transport, food, hotels, bus stops

## Authors

- [01chaitanyas-stack](https://github.com/01chaitanyas-stack)
- Hackathon Team

## License

This project is for educational and hackathon use. Please contact the authors for other uses.

Mind Crafters timing:-5:00am
