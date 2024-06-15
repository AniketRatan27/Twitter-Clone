/** @format */

import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  commentOnPost,
  deletePost,
  getAllPost,
  getFollowingPosts,
  getLikedPost,
  getUserPosts,
  likeUnlikePost,
} from "../controllers/post.contoller.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPost);
router.get("/user/:username", protectRoute, getUserPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPost);

router.post("/create", protectRoute);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
