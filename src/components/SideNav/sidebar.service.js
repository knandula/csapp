import httpClient from '../../services/httpClient';

export const list = () => httpClient('/sidebars');
export const getOne = () => httpClient('/sidebars/actions/bar');

export const surveysSideNav = () => httpClient('/surveys/get/sidenavfilter');

const service = {list, getOne, surveysSideNav};
export default service;
