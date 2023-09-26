const express = require("express");
const router = express.Router();

const apiRouter = require('./apiRouter');
const appRouter = require('./appRouter');

router.use("/api", apiRouter);
router.use("/", appRouter);

module.exports = router;