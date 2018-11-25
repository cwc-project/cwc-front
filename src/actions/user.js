export const GET_USER = 'GET_USER';;

export function getUser() { 
    return {
        type: GET_USER,
        request: {
            method: 'get',
            url: `/users/1`,
        },
    };
};