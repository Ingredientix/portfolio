const initialState = {
    currentGame: [],
}

const getCurrentGameReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_CURRENT_GAME':
            return {
                ...state,
                currentGame: action.payload.currentGame
            }
        default:
            return {
                ...state
            }
    }
}

export default getCurrentGameReducer