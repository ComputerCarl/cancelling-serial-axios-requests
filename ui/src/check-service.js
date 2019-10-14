import axios from 'axios';

// https://github.com/axios/axios/issues/1361 - cancelling axios requests
let call = {};
const once = (config = {}, requestType = 'unnamed') => {
    if (call[requestType]) {
        call[requestType].cancel("Only one request allowed at a time. Cancelling first.");
    }
    call[requestType] = axios.CancelToken.source();
    config.cancelToken = call[requestType].token
    return axios(config);
}

export const post = (data) => {
    console.log(`request for type ${data.type || '<none>'} made`);
    return once({
        data,
        method: 'post',
        url: 'http://localhost:3030/'
    }, data.type)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
}