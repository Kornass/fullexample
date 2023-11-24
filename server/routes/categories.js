const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/categories.js");

router.post("/add", controller.category_add);
router.post("/update", controller.category_update);
router.post("/delete", controller.category_delete);
router.get("/categories", controller.category_categories);
router.get("/:category", controller.category_custom);

module.exports = router;
