const mongoose = require('mongoose');

const Album = mongoose.model('albums');
const AlbumList = mongoose.model('albumlists');

module.exports = (app) => {
    app.get('/api/albums', async (req, res) => {
        const user = req.user.googleId;
        const albums = await Album.find({ owner: user });
        res.send(albums);
    });

    app.post('/api/album', async (req, res) => {
        const userId = req.user.googleId;
        const { id, number } = req.body;

        const album = await AlbumList.findOne({ _id: id });
        const price = album.nowPrice * number;
        if (price > req.user.money) {
            res.status(400).send({
                msg: 'User have not enough money to buy this album.',
            });
            return;
        }
        req.user.money -= price;

        const existingAlbum = await Album.findOne({
            owner: userId,
            albumId: id,
        });
        if (existingAlbum) {
            existingAlbum.number += number;
            await existingAlbum.save();
        } else {
            await new Album({
                owner: userId,
                albumId: id,
                number,
            }).save();
        }
        const user = await req.user.save();
        res.send(user);
    });
};
