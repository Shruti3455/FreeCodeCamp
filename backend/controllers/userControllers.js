import asyncHandler from "../middleware/asyncHandler.js";

const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});
