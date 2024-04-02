const musicSchema = require('../../models/multiMedi/musicModal');
const musicCtrl = {};


//upload track by user
musicCtrl.uploadSingle = async (req, res, next) => {
    console.log(req.body);
   console.log(req.file)
   next();
};

//list all tracks
musicCtrl.getAllTracks = async () => {

};

//list user tracks
musicCtrl.getUserTracks = async () => {

};

//remove track
musicCtrl.removeTrack = () => {

};
//edit track meta data info
musicCtrl.editTrack = () => {

};

module.exports = musicCtrl;