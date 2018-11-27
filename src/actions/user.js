export const GET_USER = 'GET_USER';

export function getUser(id) { 
    return {
        type: GET_USER,
        request: {
            method: 'get',
            url: `/users/${id}`,
        },
    };
};