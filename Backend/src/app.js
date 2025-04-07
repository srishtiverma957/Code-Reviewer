const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Load custom routes safely
try {
  const aiRoutes = require('./routes/ai.routes');
  app.use('/ai', aiRoutes);
} catch (err) {
  console.error('Error loading ai.routes:', err.message);
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
