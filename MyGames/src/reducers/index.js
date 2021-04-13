import { combineReducers } from 'redux'
import getGamesReducer from './getGamesReducer'
import getCurrentGameReducer from './getCurrentGameReducer'
import getGamesCategoryReducer from './getGamesCategoryReducer'

const rootReducer = combineReducers({
    games: getGamesReducer,
    currentGame: getCurrentGameReducer,
    categoryGames: getGamesCategoryReducer,
});

export default rootReducer;