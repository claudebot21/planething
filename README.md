# Planething ✈️

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE.txt)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Convex](https://img.shields.io/badge/Convex-1.23-orange)](https://convex.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF)](https://vitejs.dev/)

A real-time flight tracking dashboard for Bucharest's Henri Coandă International Airport (OTP). Built with Convex, React, and Vite.

**Features:**
- 🛫 Real-time departures and arrivals
- ⏱️ Live delay tracking with visual indicators
- 🔐 User authentication via Convex Auth
- 📱 Responsive design with dark theme
- 🔄 Infinite scroll flight list
- 📊 Flight statistics dashboard

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your AERODATABOX_API_KEY from RapidAPI

# Start development servers
npm run dev
```

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, React Router
- **Backend:** Convex (database + serverless functions)
- **Auth:** Convex Auth with password provider
- **API:** AeroDataBox via RapidAPI
- **UI:** Custom components with Radix UI

## 📊 Data Sources

- **AeroDataBox API** (RapidAPI) — Real-time flight schedules
- **Airport:** OTP (Bucharest Henri Coandă International)

## 📝 Environment Variables

```env
AERODATABOX_API_KEY=your_rapidapi_key_here
```

## 📦 Deployment

Build for production:
```bash
npm run build
```

## License

Apache 2.0 — see [LICENSE.txt](LICENSE.txt)
