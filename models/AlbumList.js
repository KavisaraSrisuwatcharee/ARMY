const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlbumList = new Schema({
    name: String,
    oldPrice: Number,
    nowPrice: Number,
    pic: String,
    lastUpdated: { type: Date, default: Date.now() },
});

mongoose.model('albumlists', AlbumList);
