import axios from 'axios'
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../api'

export const getGames = () => async (dispatch) => {

    const popularData = await axios.get(popularGamesURL(12))
    const newData = await axios.get(newGamesURL(12))
    const upcomingData = await axios.get(upcomingGamesURL(12))

    dispatch({
        type: 'GET_GAMES',
        payload: {
            popular: popularData.data.results,
            new: newData.data.results,
            upcoming: upcomingData.data.results,
        }
    })
}