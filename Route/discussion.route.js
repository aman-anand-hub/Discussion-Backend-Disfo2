const router = require("express").Router();
const { postReq, getAll, getByUsername, getById, deleteById, patchById,putById } = require("../Controller/discussion.controller");
const { validateDiscussionData } = require("../Middleware/discussionData.middleware");
const { verifyAuth } = require("../Middleware/verifyAuth.middleware");

router.post("/new", validateDiscussionData,postReq);
router.get("/all1", verifyAuth, getAll);
router.get("/user/:username", getByUsername);
router.get("/id/:id", getById);
router.delete("/id/:id", deleteById);
router.patch("/id/:id", patchById);
router.put("/id/:id", putById);

module.exports = router;