const initState = { 
    message: 'Działa!',
    time: new Date(),
    users: [],
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'getCurrentTime':
            return {
                ...state,
                time: new Date(),
            }
        case 'ADD_USER':
            const { username } = action.payload;
            return {
                ...state,
                users: [...state.users, username]
            }
        case 'DELETE_USER':
            const { id } = action.payload;
            const currUsers = state.users.filter(user => user.id !== id)
            return {
                ...state,
                users: currUsers,
            }
        case 'DELETE_ALL_USERS':
            return {
                ...state,
                users: [],
            }
        default:
            return state;
    }
}

export default reducer;