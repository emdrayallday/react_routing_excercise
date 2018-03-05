import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'
import 'tachyons'
import Home from './pages/index.js'
import Search from './pages/search.js'
import mark from './pages/mark.js'
import store from './store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route exact path="/mark" component={mark} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
