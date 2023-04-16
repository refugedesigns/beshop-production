const { Router } = require("express")
const { getAllOrders, createOrder, getCurrentUserOrders, getSingleOrder, updateOrder } = require("../controllers")


const router = Router()


router.route("/").get(getAllOrders).post(createOrder)

router.route("/getCurrentUserOrders").get(getCurrentUserOrders)

router.route("/:id").get(getSingleOrder).patch(updateOrder)


module.exports = router;