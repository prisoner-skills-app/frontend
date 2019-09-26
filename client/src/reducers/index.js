import { axiosWithAuth } from '../hooks';

export default function reducer(state, action) {
    switch (action.type) {
        case 'set_user':
            return {
                ...state,
                user: action.payload,
            };
        case 'update_user':
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case 'logout_user':
            window.localStorage.removeItem('user');
            return {
                ...state,
                user: {},
            };
        case 'update_candidates':
            return {
                ...state,
                candidates: [...state.candidates, action.payload],
            };
        case 'set_user_candidates':
            return {
                ...state,
                candidates: action.payload,
            };
        case 'delete_user':
            axiosWithAuth()
                .delete()
                .then(res => console.log(res))
                .catch(err => console.log(err));

            window.localStorage.removeItem('user');

            return {
                state: {},
            };
        default:
            return state;
    }
}
