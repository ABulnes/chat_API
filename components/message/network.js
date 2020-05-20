// Message Endpoints

// Express
const express = require("express");
const router = express.Router();

//Modules
const response = require("../../network/response");
const controller = require("./controller");

// Routes

/**
 * @route POST /messsage/ 
 * @description Endpoint for creating a message
 * @access public
 */
router.post("/", async (req, res) => {
  const { user, message } = req.body;
  try {
    const result = await controller.addMessage(user, message);
    if (result) {
      response.success(req, res, result, 201);
    }
  } catch (err) {
    response.error(req, res, "The message wasn't save", 400, err);
  }
});

/**
 * @route GET /messsage/ 
 * @description Endpoint for listing message
 * @access public
 */
router.get("/", async (req, res) => {
  const filterMessage = req.query.user || null;

  try {
    const messages = await controller.getMessages(filterMessage);
    response.success(req, res, messages);
  } catch (err) {
    response.error(req, res, "We couldn't load the messages", 500, err);
  }
});

/**
 * @route PATCH /messsage/ 
 * @description Endpoint for updating content of the message
 * @access public
 */

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const result = await controller.updateMessage(id, text);
    if (result) {
      response.success(req, res, result);
    }
  } catch (err) {
    response.error(req, res, "The mesage wasn't update", 500, err);
  }
  res.send("Ok");
});

/**
 * @route DELETE /messsage/ 
 * @description Endpoint for deleting a message
 * @access public
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await controller.deleteMessage(id);
    if (result) {
      response.success(req, res, `Message ${id} was deleted`);
    }
  } catch (err) {
    response.error(req, res, "Failed to delete message", 500, err);
  }
});

module.exports = router;
