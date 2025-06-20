const express = require('express');
const User = require('../models/User');
const auth = require('../utils/authMiddleware');
const { oauth2Client, scopes } = require('../utils/googleClient');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Step 1: Redirect to Google Auth
router.get('/connect', auth, (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: scopes,
    state: req.headers.authorization?.split(" ")[1]
  });
  res.json({ url });
});

// Step 2: Google Callback
router.get('/callback', async (req, res) => {
  const { code, state } = req.query;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  let decoded;
  try {
    decoded = jwt.verify(state, process.env.JWT_SECRET);
  } catch (e) {
    return res.status(401).send('Invalid state token');
  }
  const user = await User.findById(decoded.user.id);
  if (!user) return res.status(404).send('User not found');

  user.connectedChannels.googleAds = {
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    connected: true
  };
  await user.save();

  res.redirect('http://localhost:5173/dashboard');
});

// Step 3: Fetch Google Ads accounts
// router.get('/accounts', auth, async (req, res) => {
//   try {
//     const user = req.user;
//     const { accessToken, refreshToken } = user.connectedChannels.googleAds;
//     if (!accessToken) return res.status(401).json({ msg: 'Not connected to Google Ads' });

//     oauth2Client.setCredentials({ access_token: accessToken, refresh_token: refreshToken });

//     const ads = google.ads({
//       version: 'v12',
//       auth: oauth2Client
//     });

//     const result = await ads.customers.listAccessibleCustomers({});
//     res.json(result.data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Failed to fetch Google Ads accounts' });
//   }
// });


router.get('/accounts', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { accessToken } = user.connectedChannels.googleAds;

    if (!accessToken) {
      return res.status(401).json({ msg: 'Not connected to Google Ads' });
    }

    const customer = oauth2Client.getCustomer('', {
      access_token: accessToken,
    });

    const { resourceNames } = await customer.listAccessibleCustomers();
    res.json({ accounts: resourceNames });
  } catch (err) {
    console.error('Google Ads fetch error:', err);
    res.status(500).json({ msg: 'Failed to fetch Google Ads accounts' });
  }
});


module.exports = router;
