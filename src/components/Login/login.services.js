import httpClient from '../../services/httpClient';

export const login = (data) => httpClient('/auth/local', {method: 'POST', data});

export const forgotPassword = (data) => httpClient('/auth/local/forgotpassword', {method: 'POST', data});

export const resetPassword = ({token, data}) => httpClient(`/auth/local/resetpassword?access_token=${token}`, {method: 'POST', data});

export const getMe = () => httpClient('/people/get/me');

export const getProfile = ({id}) => httpClient(`/people/${id}/show`);

const service = {login, forgotPassword, resetPassword, getMe, getProfile};
export default service;
