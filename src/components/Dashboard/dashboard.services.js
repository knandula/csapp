import httpClient from '../../services/httpClient';

export const get = () => httpClient('/dashboards');

const service = {get};
export default service;
