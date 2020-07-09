import axios from 'axios';

export const fetchData = async () => {
    try {
        const res = await axios.get('/api/measuresDetails')
        return res;
        console.log(res);
    } catch (error) {
        return error;

    }
}

