import axios from 'axios'
import { currentGameURL } from '../api'

export const getCurrentGame = (id) => async (dispatch) => {

    const currentGame = await axios.get(currentGameURL(id))

    dispatch({
        type: 'GET_CURRENT_GAME',
        payload: {
            currentGame: currentGame.data,
        }
    })
}