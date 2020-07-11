const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlbumSchema = new Schema({
    owner: String,
    albumId: String,
    number: Number,
});

mongoose.model('albums', AlbumSchema);
