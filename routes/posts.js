const express = require("express");
const {
  getAllPosts,
  getFollowingPost,
  addPosts,
  editPosts,
  deletePosts,
  likePost,
  savePost,
  getBookmarks,
  getPostById,
} = require("../controllers/posts");
const { verifyAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/", verifyAuth, getAllPosts);
router.get("/bookmarks", verifyAuth, getBookmarks);
router.get("/feed", verifyAuth, getFollowingPost);
router.get("/:post_id", verifyAuth, getPostById);
router.post("/", verifyAuth, addPosts);
router.post("/:post_id", verifyAuth, editPosts);
router.post("/like/:post_id", verifyAuth, likePost);
router.post("/save/:post_id", verifyAuth, savePost);
router.delete("/:post_id", verifyAuth, deletePosts);

module.exports = router;
