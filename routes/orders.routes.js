const { Router, raw } = require("express")
const {
  authenticateUser,
  authorizePermissions,
  validateCreateOrder,
} = require("../middlewares");
const {
  getAllOrders,
  createOrder,
  getCurrentUserOrders,
  getSingleOrder,
  updateOrder,
} = require("../controllers");

const router = Router();

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getAllOrders)
  .post(authenticateUser, validateCreateOrder, createOrder);

router
  .route("/getCurrentUserOrders")
  .get(authenticateUser, getCurrentUserOrders);

router.route("/webhooks").post(raw({type: "application/json"}), updateOrder)

router
  .route("/:id")
  .get(authenticateUser, getSingleOrder)
  .patch();


module.exports = router;