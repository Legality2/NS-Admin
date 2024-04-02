var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../../config/config.js');

var musicModel = new Schema({
    file:{},
    metainfo: {
        trackName: String,
        artist: String,
        ft: [String],
        plays: Number,
        path: String
    }
});

module.exports = mongoose.model('musicModel', musicModel);