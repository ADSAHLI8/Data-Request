
# Data Request App

## Overview

this is a full-stack web application built with React on the frontend and a backend connected to MongoDB Atlas. The app is designed to provide a clean, animated user interface and integrates a MongoDB database for data persistence.

## Features

- **Animated Background**: Smooth gradient animation in the background transitions every 15 seconds, offering a dynamic look.
- **Responsive Design**: Components are styled for responsiveness, with margins and padding adjusted for different screen sizes.
- **MongoDB Atlas Integration**: The app connects to MongoDB Atlas for managing and storing application data securely in the cloud.
- **Component-based Architecture**: Built using React, the app leverages reusable components to simplify development.

## Installation

### Prerequisites
- Redux
- Node.js
- MongoDB Atlas account (with a cluster set up)

### Steps to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Data_Request_Project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Data_Request_Project
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string in the `.env` file:
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     ```

5. Start the backend server:
   ```bash
   npm run server
   ```

6. In another terminal, start the frontend application:
   ```bash
   npm start
   ```

This will start both the backend (on `http://localhost:5000`) and the frontend (on `http://localhost:3000`).

## Folder Structure

```
Data Request Project/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
|   ├── .env
|   ├── package.json
├── frontend/
|   ├── public/
|   ├── src/
│   |    ├──── css/
│   |    ├── data/
│   |    ├── features/
│   |    ├── store/
│   |    ├── App.js
│   |    ├── App.css
│   |    └──  index.js
├── package.json
└── README.md
```

- **`App.js`**: Main frontend logic for handling routing and rendering components.
- **`App.css`**: Styling and animations, including background effects.
- **`index.js`**: Entry point that renders the app into the DOM.
- **`backend/`**: Contains backend logic, including MongoDB models and API routes.
- **`store/`**: Contains Redux logic, including reducers for managing global state.
- **`data/`**: Contains data provided to select components
- **`features/`**: Contains frontend logic for each component, state management and Api requests  .
.



## Backend Overview

The backend is built using Node.js and Express, connected to MongoDB Atlas. It handles API requests and communicates with the database to perform CRUD operations.

- **Express.js**: Used to create the server and define API endpoints.
- **MongoDB Atlas**: Cloud-based NoSQL database for managing app data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB, used to define schemas and interact with the database.



## Technologies Used

- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - Redux: For managing the global state of the application.
  - CSS3: Custom styling and animations.
  - PrimeReact: UI library used for components.
- **Backend**:
  - Node.js: JavaScript runtime for backend development.
  - Express.js: Web framework for creating the API.
  - MongoDB Atlas: Cloud-based NoSQL database.
  - Mongoose: ODM for MongoDB to interact with the database.

## Custom Styling

- **Background Animation**: A smooth color transition applied to the body element.
- **Container Styles**: Rounded containers with a subtle shadow, providing a modern UI feel.
- **Tab View Customization**: The tab navigation is hidden, and panel styling is adjusted for a cleaner look.

## Contributing

If you would like to contribute to the project, feel free to open a pull request or report an issue in the GitHub repository.




