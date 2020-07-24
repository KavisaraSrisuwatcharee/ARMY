const mongoose = require('mongoose');

const AlbumList = mongoose.model('albumlists');
const parseAlbumList = require('../utils/parseAlbumList');

module.exports = (app) => {
    app.get('/api/albumlist', async (req, res) => {
        const data = await AlbumList.find({});
        const albumList = data.map((album) => {
            return parseAlbumList(album);
        });
        res.send(albumList);
    });

    app.get('/api/album', async (req, res) => {
        const { id } = req.query;
        const data = await AlbumList.findById(id);
        const album = parseAlbumList(data);
        res.send(album);
    });

    app.post('/api/albumlist', async (req, res) => {
        try {
            const { name, price, pic } = req.query;
            await new AlbumList({
                name,
                pic,
                oldPrice: price,
                nowPrice: price,
            }).save();
            res.send({ msg: 'Add new album to store successfully.' });
        } catch (err) {
            res.status(500).send({ msg: 'Fail to add new album to store.' });
        }
    });

    app.patch('/api/album', async (req, res) => {});
};
