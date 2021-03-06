import { axiosWithAuth } from '../hooks';

export default function reducer(state, action) {
    switch (action.type) {
        case 'set_user':
            return {
                ...state,
                user: action.payload,
            };
        case 'update_user':
            console.log(state.user, action.payload);
            window.localStorage.setItem(
                'user',
                JSON.stringify({
                    ...state.user,
                    ...action.payload,
                })
            );
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case 'logout_user':
            window.localStorage.removeItem('user');
            return {};
        case 'update_candidates':
            if (state.candidates) {
                return {
                    ...state,
                    candidates: [...state.candidates, action.payload],
                };
            } else {
                return {
                    ...state,
                    candidates: [...action.payload],
                };
            }

        case 'edit_candidates':
            let updatedCandidates = state.candidates.map(c => {
                if (c.id == action.payload.id) {
                    return action.payload;
                }
                return c;
            });

            return {
                ...state,
                candidates: updatedCandidates,
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
        case 'delete_candidate':
            console.log('Inside case delete');
            axiosWithAuth()
                .delete(`/candidates/${action.payload}`)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            let candidates = state.candidates.filter(c => {
                console.log(action.payload);
                console.log(c);

                return c.id !== action.payload;
            });

            console.log(candidates);

            return {
                ...state,
                candidates: candidates,
            };
        case 'set_preview':
            return {
                ...state,
                preview: action.payload,
            };
        case 'update_search':
            return {
                ...state,
                search: action.payload,
            };

        case 'update_state':
            return {
                ...state,
                state: action.payload,
            };

        default:
            return state;
    }
}
