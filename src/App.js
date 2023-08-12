import React, { Component } from 'react'
import NewsItem from './components/NewsItem'
import NavBar from './components/NavBar'
import { Route, Routes,Link, BrowserRouter as Router } from 'react-router-dom'  
import BusinessNews from './Pages/BusinessNews'
import Entertainment from './Pages/Entertainment'
import HealthNews from './Pages/HealthNews'
import SportsNews from './Pages/SportsNews'
import TechnologyNews from './Pages/TechnologyNews'
import AllNews from './Pages/AllNews'

export default class App extends Component {
  render() {
    return (
      <>
          <Router>
              <NavBar/>
              <Routes>
                <Route  path="/" element={<AllNews/>}/>
                <Route  path="/BusinessNews" element={<BusinessNews/>}/>
                <Route  path="/Entertainment" element={<Entertainment/>}/>
                <Route  path="/HealthNews" element={<HealthNews/>}/>
                <Route  path="/SportsNews" element={<SportsNews/>}/>
                <Route  path="/TechnologyNews" element={<TechnologyNews/>}/>
              </Routes>
          </Router>
      </>
    )
  }
}
