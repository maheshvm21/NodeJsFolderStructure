const axios = require('./apiCall');

const getPhotosByAlbumId = async (id) => {
    const result = await axios.request({
        method: 'get',
        url: `/${id}/photos?_limit=4`
    });
    const { data } = result;
    console.log(data,'data')
    return data;
};

module.exports = getPhotosByAlbumId;