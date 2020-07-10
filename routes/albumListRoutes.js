const mongoose = require('mongoose');

const AlbumList = mongoose.model('albumlists');

module.exports = (app) => {
    app.get('/api/albumlist', async (req, res) => {
        const albumList = await AlbumList.find({});
        res.send(albumList);
    });

    app.post('/api/albumlist', async (req, res) => {
        const { name, price, pic } = req.body;
        const newAlbum = await new AlbumList({
            name,
            pic,
            oldPrice: price,
            nowPrice: price,
        }).save();
        res.send(newAlbum);
    });
};
