const axios = require('./apiCall');
const getPhotosByAlbumId = require('./index');

jest.mock('./apiCall', () => {
    return {
        baseURL: 'https://jsonplaceholder.typicode.com/albums',
        request: jest.fn().mockResolvedValue({
            data: [
                {
                    albumId: 3, 
                },
                {
                    albumId: 3,
                    
                },
                {
                    albumId: 3,
                   
                }
            ]
        }),
    }
});

describe('test getPhotosByAlbumId', () => {
    afterEach(() => jest.resetAllMocks());

    it('fetches photos by album id', async () => {
        const photos = await getPhotosByAlbumId(3);
        expect(axios.request).toHaveBeenCalled();
        expect(axios.request).toHaveBeenCalledWith({ method: 'get', url: '/3/photos?_limit=3' });
        expect(photos.length).toEqual(3);
        expect(photos[0].albumId).toEqual(3)
    });
});