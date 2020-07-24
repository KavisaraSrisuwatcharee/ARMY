module.exports = (album) => {
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
};
