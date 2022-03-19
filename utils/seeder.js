const mongoose = require('mongoose');
const Room = require('../models/room');
const rooms = require('../data/rooms');

 mongoose.connect('mongodb://127.0.0.1:27017/booknow', {
   autoIndex: false,
 });

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log('Rooms deleted successfully');

    await Room.insertMany(rooms);
    console.log('Rooms inserted successfully');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
