const express = require('express')
const router = express.Router()
const controller = require("../controller/controller.js")

//users
router.get("/users/:id", controller.getUser)//get user profile
router.post("/users", controller.createUser)//create new user
router.patch("/users/:id", controller.updateUser)//update user or deactivate user
//token
router.get("/token", controller.getToken)// geting the oauth token
router.post("/token", controller.signIn)// sign in
router.delete("/token", controller.logOut)// log out
//events
router.post("/events", controller.createEvents)//stretch add events
router.get("/events", controller.getAllEvents)// get all events
router.get("/events/:id", controller.getOneEvent)// get an event
router.get("/events/?", controller.eventQuery)//stretch querie events
router.patch("/event/:id", controller.updateEvent)// update event
router.delete("/event/:id", controller.deleteEvent)// delete event
//Pickup_locations
router.get("/event/:id/pickup", controller.getAllPickupLocations)// get all pickup locations for event
router.get("/event/:id/pickup/:pid", controller.getOnePickupLocation)//get one pickup location for event
router.post("/pickup", controller.createPickupLocation)// create pickup location
router.patch("/pickup/:id", controller.updatePickupLocation)// update pickup location
router.delete("/pickup/:id", controller.deletePickupLocation)// delete pickup location
//busses
router.get("/buses", controller.getAllBuses)//get all busses
router.get("/buses/:id", controller.getOneBus)//get one bus
router.post("/buses", controller.createBus)//create a bus
router.patch("/buses/:id", controller.updateBus)//update a bus
router.delete("/buses/:id", controller.deleteBus)//delete a bus

module.exports = router
