import { Router } from "express";
import { booking } from "../Controllers/slot.booking.js";


const router= Router()
router.route('/slotbooking').post(booking)

export default router
