const initialState = {
    popular: [],
    new: [],
    upcoming: [],
}

const getGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                popular: action.payload.popular,
                new: action.payload.new,
                upcoming: action.payload.upcoming,
            }
        default:
            return {
                ...state,
            }
    }
}

export default getGamesReducer