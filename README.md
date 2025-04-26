# Crypto Dashboard with Real-Time Updates

This project demonstrates a simple cryptocurrency dashboard that displays data for a few assets (BTC, ETH, USDT, BNB, ADA) in a responsive table. It features simulated real-time updates for price, percentage changes, and 24-hour volume using Redux for state management.

## Features

- **UI Table:** Displays key information for 5 cryptocurrency assets, including:
    - Rank (#)
    - Logo
    - Name
    - Symbol
    - Price
    - 1-hour percentage change (color-coded: green for positive, red for negative)
    - 24-hour percentage change (color-coded: green for positive, red for negative)
    - 7-day percentage change (color-coded: green for positive, red for negative)
    - Market Cap
    - 24-hour Volume
    - Circulating Supply
    - Max Supply
    - Placeholder for a 7-day chart.
- **Responsive Design:** The table adapts to different screen sizes.
- **Simulated Real-Time Updates:** Uses `setInterval` within a mocked WebSocket class to randomly update the price, percentage changes, and 24-hour volume of the assets every 1-2 seconds.
- **Redux State Management:** Leverages Redux Toolkit (`createSlice`, `configureStore`) to manage all asset data in a central store.
- **Efficient Rendering:** Employs selectors to optimize component re-renders by only selecting the necessary data from the Redux store.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Redux Toolkit:** Opinionated toolset for efficient Redux development.
- **react-redux:** Official React bindings for Redux.
- **redux-persist** For persistence
- **Tailwind Css:** For styling the UI components.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the Vite development server. Open your browser and navigate to the address provided (usually `http://localhost:5173`).

## Project Structure
