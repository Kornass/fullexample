const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/products.js");

router.post("/add", controller.product_add);
router.post("/update", controller.product_update);
router.post("/delete", controller.product_delete);
router.get("/:product", controller.product_product);
router.get("/", controller.get_all);

module.exports = router;
