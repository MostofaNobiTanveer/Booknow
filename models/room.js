const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Room name is required'],
    trim: true,
    maxlength: [100, 'Room name must be less than 100 characters'],
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Room price per night is required'],
    maxlength: [4, 'Room price must be less than 4 characters'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Room description is required'],
  },
  address: {
    type: String,
    required: [true, 'Room address is required'],
  },
  guestCapacity: {
    type: Number,
    required: [true, 'Room guest capacity is required'],
  },
  numOfBeds: {
    type: Number,
    required: [true, 'Room number of beds is required'],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Room category is required'],
    enum: {
      values: ['King', 'Single', 'Twins'],
      message: 'Room category must be King, Single or Twins',
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
