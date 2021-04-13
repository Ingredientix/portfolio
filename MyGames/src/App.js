import React, { useEffect, useState } from 'react'
import { getGames } from './actions/getGames'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
//Components
import GlobalStyle from './components/GlobalStyle'
import MainNav from './components/MainNav'
//Pages
import Home from './pages/Home'
import Categories from './pages/Categories'
import Contact from './pages/Contact'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames()).then(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  return (
    <div className="App">
      <GlobalStyle />
      <MainNav />
      {!isLoading &&
        <Route path={['/game/:id', '/']} exact>
          <Home />
        </Route>
      }
      <Route path={['/popular/:id', '/popular']} exact>
        <Categories type='popular' />
      </Route>
      <Route path={['/new/:id', '/new']} exact>
        <Categories type='new' />
      </Route>
      <Route path={['/upcoming/:id', '/upcoming']} exact>
        <Categories type='upcoming' />
      </Route>
      <Route path={'/contact'} exact>
        <Contact />
      </Route>
    </div>
  );
}

export default App;
