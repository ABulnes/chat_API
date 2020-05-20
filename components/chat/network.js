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
 * @route GET /chat/
 * @description Endpoint for listing chats
 * @access public
 */
router.get("/", async (req, res) => {
    try {
        const chats = await controller.getChats();
        response.success(req, res, chats);
    }catch(err){
        response.error(req, res, 'Internal error', 500, err);
    }
});


module.exports = router;