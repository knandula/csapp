import httpClient from './httpClient';

export const create = (data) => httpClient('/auth/local', { method: 'POST', data });

const service = {create};
export default service;
