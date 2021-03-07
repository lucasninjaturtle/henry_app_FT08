import { STATUS_CHANGE, LOADING } from './constants';

export const statusChange = (user) => {
    return {
        type: STATUS_CHANGE,
        user
    }
};

export const loadingChange = (loading) => {
    return {
        type: LOADING,
        loading
    }
};
