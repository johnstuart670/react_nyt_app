const router = require("express").Router();
const aControl = require("../../Controllers/articleController");

// Matches with "/api/articles"
router.route("/")
  .get(aControl.findAll)
  .post(aControl.create);


// Matches with "/api/articles/:id" in the controller/aControl files
router
  .route("/:id")
  .get(aControl.findById)
  .put(aControl.update)
  .delete(aControl.remove);
