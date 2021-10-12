const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUsers,
  deleteUsers,
} = require("../controllers/user.controllers");

router.route("/").get(getUsers).post(createUsers);
//http://localhost:4000/api/users/1
router
  .route("/:id")
  //.put()
  .delete(deleteUsers);

module.exports = router;
