'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Equipment Schema
 */
var EquipmentSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Equipment name',
    trim: true
  },
  notes: {
    type: String,
    default: '',
    trim: true
  },
  image: {
    type: String,
    default: '',
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Equipment', EquipmentSchema);
