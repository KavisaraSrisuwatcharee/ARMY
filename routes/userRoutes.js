const mongoose = require('mongoose');

const Album = mongoose.model('albums');
const AlbumList = mongoose.model('albumlists');

module.exports = (app) => {
    app.get('/api/albums', async (req, res) => {
        const user = req.user.googleId;
        const albums = await Album.find({ owner: user });
        res.send(albums);
    });

    app.post('/api/buy/album', async (req, res) => {
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

    app.post('/api/sell/album', async (req, res) => {
        const userId = req.user.googleId;
        const { id, number } = req.body;

        const album = await AlbumList.findOne({ _id: id });
        const price = album.nowPrice * number;

        const existingAlbum = await Album.findOne({
            owner: userId,
            albumId: id,
        });

        if (existingAlbum) {
            if (existingAlbum.number >= number) {
                existingAlbum.number -= number;
                await existingAlbum.save();
                if (existingAlbum.number === 0) {
                    await Album.deleteOne({ owner: userId, albumId: id });
                }
                req.user.money += price;
                const user = await req.user.save();
                res.send(user);
            } else {
                res.send({ msg: 'User cannot sell this album' });
            }
        } else {
            res.send({ msg: 'User did not own this album' });
        }
    });
};
