import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/index.js'
import Search from './pages/search.js'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
