// User endpoints

// Express
const express = require("express");
const router = express.Router();

//Modules
const response = require("../../network/response");
const controller = require("./controller");

/**
 * @route POST /user/
 * @description Endpoint for creating an user.
 * @access public
 */
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const user = await controller.addUser(name);
    if (user) {
      response.success(req, res, user, 201);
    }
  } catch (err) {
    response.error(req, res, "Internal error", 500, err);
  }
});

/**
 * @route GET /user/
 * @description Endpoint for listing users
 * @access public
 */
router.get("/", async (req, res) => {
  const filter =  req.query.name || null;
  try {
    const users = await controller.getUsers(filter);
    response.success(req, res, users);
  } catch (err) {
      response.error(req, res, 'Internal error', 500, err);
  }
});

module.exports = router;
