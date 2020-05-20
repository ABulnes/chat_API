// Chat Endpoints

// Express
const express = require("express");
const router = express.Router();

//Modules
const response = require("../../network/response");
const controller = require("./controller");

/**
 * @route POST /chat/
 * @description Endpoint for creating chat
 * @access public
 */
router.post("/", async (req, res) => {
  const { users } = req.body;
  try {
    const chat = await controller.createChat(users);
    if (chat) {
      response.success(req, res, chat, 201);
    }
  } catch (err) {
    response.error(req, res, "Internal error", 500, err);
  }
});

/**
 * @route GET /chat/<userid | optional >
 * @description Endpoint for listing chats
 * @access public
 */
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const chats = await controller.getChats(userId);
    response.success(req, res, chats);
  } catch (err) {
    response.error(req, res, "Internal error", 500, err);
  }
});

module.exports = router;
