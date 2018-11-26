import './main.css'
import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router,Route} from 'react-router'

import reducers from 'reducers'

import Layout from 'containers/layout'
import Users from 'containers/users'
import User from 'containers/user'



const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route  component={Layout}>
                <Route path='/' component={Users}/>
            </Route>
            <Route path='/users/:name' component={User}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)