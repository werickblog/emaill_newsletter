const express = require("express");
const middlewares = require("../middlewares");

const router = express.Router();

router.post("/create", middlewares.createNewsLetter);

router.get("/newsletters", middlewares.fetchAllNewsletter);

router.get("/newsletters/:newsletter_id", middlewares.fetchSingleNewsletter);

module.exports = router;
