import Room from '../models/room';

import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';

// Get all rooms    =>    GET  /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeatures.query.clone();
  let filteredRoomsCount = rooms.length;

  rooms = await apiFeatures.pagination(resPerPage).query;

  res.status(200).json({
    success: true,
    roomsCount,
    filteredRoomsCount,
    resPerPage,
    rooms,
  });
});

// Create a new room    =>    POST  /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

// Get room details    =>    POST  /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found', 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update room details    =>    PUT  /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found', 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete room    =>    DELETE  /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found', 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: 'Room deleted successfully',
  });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
