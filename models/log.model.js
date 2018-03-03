'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const log = new Schema({
	event: String,
	date: { type: Date, default: Date.now },
	isError: Boolean
}, {
	collection: 'logs',
	_id: true
})

module.exports = mongoose.model('log', log)