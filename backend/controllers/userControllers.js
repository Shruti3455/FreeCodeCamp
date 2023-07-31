import asyncHandler from "../middleware/asyncHandler.js";

import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});
