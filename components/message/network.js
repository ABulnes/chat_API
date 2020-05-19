// Message Endpoints

// Express
const express = require("express");
const router = express.Router();

//Modules
const response = require("../../network/response");
const controller = require("./controller");

// Routes
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

router.get("/", async (req, res) => {
  try {
    const messages = await controller.getMessages();
    response.success(req, res, messages);
  } catch (err) {
    response.error(req, res, "We couldn't load the messages", 500, err);
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const result = await controller.updateMessage(id,text);
    if (result){
        response.success(req, res, result);
    }
  } catch (err) {
    response.error(req, res, "The mesage wasn't update", 500, err);
  }
  res.send("Ok");
});

module.exports = router;
