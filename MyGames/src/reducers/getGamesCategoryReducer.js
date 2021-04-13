const initialState = {
    category_games: [],
    isLoading: true,
}

const getGamesCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GAMES_CATEGORY':
            return {
                ...state,
                category_games: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        default:
            return {
                ...state,
            }
    }
}

export default getGamesCategoryReducer
