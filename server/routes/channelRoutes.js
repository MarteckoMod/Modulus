const express = require('express');
const router = express.Router();
const Channel = require('../models/Channel');

// @route   GET /api/channels
// @desc    Get all available channels
// @access  Public (for now, will be protected later)
router.get('/', async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/channels/connect
// @desc    Connect a user to a channel (dummy implementation)
// @access  Private
router.post('/connect', async (req, res) => {
  const { channelId, userId } = req.body; // userId will come from auth later

  try {
    let channel = await Channel.findById(channelId);

    if (!channel) {
      return res.status(404).json({ msg: 'Channel not found' });
    }

    // Dummy connection logic: just mark as connected for a specific user
    // In a real app, this would involve OAuth or API key exchange
    channel.isConnected = true;
    channel.userId = userId || 'dummyUserId'; // Replace with actual user ID
    await channel.save();

    res.json({ msg: `${channel.name} connected successfully!`, channel });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/sales/:channelId
// @desc    Get sales data for a specific channel (dummy implementation)
// @access  Private
router.get('/sales/:channelId', async (req, res) => {
  try {
    // In a real application, you would fetch actual sales data from the connected channel's API
    // For now, we'll return dummy data.
    const { channelId } = req.params;
    const dummySalesData = {
      channelId: channelId,
      totalSales: Math.floor(Math.random() * 10000) + 1000,
      averageOrderValue: (Math.random() * 100).toFixed(2),
      recentOrders: [
        { id: 'ORD1', date: '2024-06-15', amount: 120.50 },
        { id: 'ORD2', date: '2024-06-14', amount: 75.00 },
        { id: 'ORD3', date: '2024-06-13', amount: 200.00 },
      ],
    };
    res.json(dummySalesData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 