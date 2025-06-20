require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const googleAdsRoutes = require('./routes/googleAds'); // Assuming you have this route set up

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));


app.use('/api/auth', authRoutes);
app.use('/api/google',googleAdsRoutes); // Google Ads routes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 