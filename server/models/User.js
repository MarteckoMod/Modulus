const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
   connectedChannels: {
    googleAds: {
      accessToken: String,
      refreshToken: String,
      connected: { type: Boolean, default: false },
    },
    metaAds: {
      accessToken: String,
      refreshToken: String,
      connected: { type: Boolean, default: false },
    },
      facebookAds: {
    accessToken: String,
     connected: { type: Boolean, default: false },
    connectedAt: Date
      }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema); 