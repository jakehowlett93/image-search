import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4Dw99ww2Kx3pTBtnEIKSKj14iIheRK2Psjzx21tpJes'
    }
});

