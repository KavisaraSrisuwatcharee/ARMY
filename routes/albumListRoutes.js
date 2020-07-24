const mongoose = require('mongoose');

const AlbumList = mongoose.model('albumlists');

module.exports = (app) => {
    app.get('/api/albumlist', async (req, res) => {
        const albumList = await AlbumList.find({});
        const ans = albumList.map((album) => {
            const { lastUpdated, name, pic, oldPrice, nowPrice } = album;
            const temp = {
                id: album._id,
                name,
                pic,
                lastUpdated,
                oldPrice,
                nowPrice,
            };
            return temp;
        });
        res.send(ans);
    });

    app.get('/api/album', async (req, res) => {
        const { id } = req.body;
        const album = await AlbumList.findById(id);
        res.send(album);
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

    app.patch('/api/album', async (req, res) => {});
};
