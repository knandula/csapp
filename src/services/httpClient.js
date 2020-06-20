import axios from 'axios';
import { stringify } from 'querystring';

const defaultOptions = {
    headers: {},
    queryParams: null
};

export const restClient = axios.create();

restClient.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    const err = error.response;
    if(err.status === 401) {
        localStorage.removeItem('AuthToken');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('stream_access_token');
        window.history.go('/login');
    }
    return Promise.reject(error);
});

const HttpClient = async(url = '', options = defaultOptions) => {
    const env = process.env.NODE_ENV;
    let rootPath = 'http://localhost:9000/api';

    if(env === 'production') {
        rootPath = '/api';
    }

    let fullPath = `${rootPath}${url}`;
    if(options.queryParams) {
        const queryString = stringify(options.queryParams);
        fullPath = `${fullPath}?${queryString}`;
    }

    const token = localStorage.getItem('AuthToken');

    if(token) {
        restClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    if(options.headers && options.data && options.headers['Content-Type'] === 'multipart/form-data') {
        const formData = new FormData();

        Object.keys(options.data).forEach(key => {
            formData.set(key, options.data[key]);
        });

        options.data = formData;
    }

    return await restClient({
        url: fullPath,
        method: options.method || 'GET',
        data: options.data,
        headers: options.headers
    })
        .then(response => ({
            data: response.data,
            success: response.status === 200
                || response.status === 201
                || response.status === 204
        }
        ))
        .catch(err => ({
            data: null,
            success: false,
            message: err.response.data.message
        })
        );
};

export default HttpClient;
