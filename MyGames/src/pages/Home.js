import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
//components
import GrandDisplay from '../components/GrandDisplay'
import GameInfo from '../components/GameInfo'

const Home = () => {

    const games = useSelector(state => state.games)
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    console.log(document)

    return (
        <div>
            {path && <GameInfo endLocation={'/'} />}
            <GrandDisplay gamesInfo={games.upcoming} title='Upcoming' />
            <GrandDisplay gamesInfo={games.popular} title='Popular' />
            <GrandDisplay gamesInfo={games.new} title='New' />
        </div>
    )
}

export default Home;