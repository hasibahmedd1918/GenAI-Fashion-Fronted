# OpDrape Frontend

OpDrape is a modern web application that features a responsive design and an AI chatbot for enhanced user interaction. This project is built using React and provides a seamless experience across devices.

## Project Structure

```
opdrape-frontend
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components
│   │   ├── layout
│   │   │   ├── Navbar.css  # CSS styles for the Navbar component
│   │   │   └── Navbar.jsx  # Navbar component with navigation links
│   │   └── Chatbot
│   │       ├── Chatbot.jsx # Chatbot component for AI interactions
│   │       └── Chatbot.css # CSS styles for the Chatbot component
│   ├── pages
│   │   └── Home.jsx        # Main page of the application
│   ├── App.jsx             # Main application component
│   ├── index.js            # Entry point of the React application
│   └── types
│       └── index.ts        # TypeScript types and interfaces
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration file
```

## Features

- **Responsive Navbar**: A user-friendly navigation bar that adapts to different screen sizes.
- **AI Chatbot**: An interactive chatbot that assists users with their queries and provides information.
- **Modern Design**: Clean and modern UI that enhances user experience.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/opdrape-frontend.git
   ```
2. Navigate to the project directory:
   ```
   cd opdrape-frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.