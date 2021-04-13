//stuff
import React from 'react';
import GlobalStyle from './components/globalStyle';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//pages
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import OurWork from './pages/ourWork';
import MovieDetails from './pages/movieDetails';
//components
import Nav from './components/nav';
//router


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetails />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
