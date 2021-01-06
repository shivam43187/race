const express = require("express")
const router = express.Router()
const Racer = require("../models/racer")




router.get("/", (req, res) => {
    res.send("Hello World")
})

router.post("/addracer", async (req, res) => {
    try{
        const racer = new Racer(req.body)
        await racer.save()
        res.status(201).json(racer)
    }catch(error){
        res.status(404).send(error)
    }
})

router.get("/getracers", async (req, res) => {
    try{
        const racers = await Racer.find().sort({name: 1})
        res.status(200).json(racers)
    }catch(error){
        res.status(404).send(error)
    }
})

router.get("/getracer/:_id", async (req, res) => {
    try{
        const racer = await Racer.findById(req.params._id)
        res.status(201).json(racer)
    }catch(error){
        res.status(404).send(error)
    }
})

router.patch("/updateracer/:_id", async (req, res) => {
    try{
        const racer = await Racer.findByIdAndUpdate(req.params._id, req.body, { new: true, useFindAndModify: false })
        res.status(201).json(racer)
    }catch(error){
        res.status(404).send(error)
    }
})

router.delete("/deleteracer/:_id", async (req, res) => {
    try{
        const racer = await Racer.findByIdAndDelete(req.params._id)
        res.status(200).json(racer)
    }catch(error){
        res.status(404).send(error)
    }
})

module.exports = router;