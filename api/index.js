'use strict'

const express = require(`express`)
const router = express.Router()

router.use(`/`, require(`./currencies/`))
router.use(`/token`, require(`./auth/`))

module.exports = router