const { Router } = require("express")
const { getAllOrders, createOrder, getSingleUserOrders, getSingleOrder, updateOrder } = require("../controllers")


const router = Router()


router.route("/").get(getAllOrders).post(createOrder)

router.route("/getSingleUserOrders").get(getSingleUserOrders)

router.route("/:id").get(getSingleOrder).patch(updateOrder)


module.exports = router;