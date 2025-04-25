Project Title
Real-Time Crypto Price Tracker

Description
This project is a React + Redux Toolkit application that tracks real-time cryptocurrency prices. The app  updates by periodically changing cryptocurrency data every 1-2 seconds. It utilizes Redux for state management to store and display the data, including price changes, market cap, and 24h volume.

Features
Simulated Real-Time Price Updates: Prices update every 1–2 seconds to simulate real-time data.
Color-coded Price Changes: Percentage changes in price are color-coded (green for positive, red for negative).
Responsive Design: The app is mobile-friendly, displaying a responsive table.
Redux for State Management: All cryptocurrency data is managed with Redux Toolkit to optimize performance.
Data Display: Includes fields such as price, percentage change (1h, 24h, 7d), market cap, and 24h volume.

Tech Stack
Frontend: React.js, Redux Toolkit, Tailwind CSS
State Management: Redux Toolkit
Styling: Tailwind CSS
Simulated WebSocket: setInterval to simulate real-time data updates every 1–2 seconds

Project Architecture
Components:
CryptoTable: Displays the table of cryptocurrencies with real-time data.
WebSocketCrypto: Simulates WebSocket behavior for updating data every 1-2 seconds using setInterval.
Redux Slices:
webcryptoSlice: Handles cryptocurrency asset data (price, market cap, volume, etc.).
Custom Hooks:
useWebSocket: Custom hook to simulate WebSocket updates (via setInterval).

## Demo Video
Watch the demo of the app on post: [Demo Video Link](https://www.linkedin.com/posts/sumitshrivaas_react-reduxtoolkit-cryptotracker-activity-7321569814500548612-ozzn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9VCbkBXT9rJi39N8NdlpgxFadTt_CDbAc)


## Site Live here
Watch the Live of the app: [Live](https://www.linkedin.com/posts/sumitshrivaas_react-reduxtoolkit-cryptotracker-activity-7321569814500548612-ozzn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9VCbkBXT9rJi39N8NdlpgxFadTt_CDbAc](https://chipper-cendol-d61b2b.netlify.app/))

