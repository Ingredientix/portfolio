import axios from 'axios'
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../api'

export const getGamesCategory = (category, increase = 0) => async (dispatch) => {

    let quantity = 20 + increase
    switch (category) {

        case 'popular':
            const popularData = await axios.get(popularGamesURL(quantity))
            dispatch({
                type: 'GET_GAMES_CATEGORY',
                payload: {
                    data: popularData.data.results,
                    isLoading: false,
                }
            })
            break

        case 'upcoming':
            const upcomingData = await axios.get(upcomingGamesURL(quantity))
            dispatch({
                type: 'GET_GAMES_CATEGORY',
                payload: {
                    data: upcomingData.data.results,
                    isLoading: false,
                }
            })
            break

        case 'new':
            const newData = await axios.get(newGamesURL(quantity))
            dispatch({
                type: 'GET_GAMES_CATEGORY',
                payload: {
                    data: newData.data.results,
                    isLoading: false,
                }
            })
            break
    }
}