// Load environment variables from .env file
require('dotenv').config();

// Import the Express app
const app = require('./src/app');

// Define the port (can be from .env or fallback to 3000)
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
