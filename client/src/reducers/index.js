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
        case 'set_user_candidates':
            return {
                ...state,
                candidates: action.payload,
            };
        default:
            return state;
    }
}
