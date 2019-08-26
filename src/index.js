import React from 'react'
import ReactDOM from 'react-dom'
import 'reset-css'
import 'typeface-roboto'
import App from './App'
import Provider from './context'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

JavascriptTimeAgo.locale(en)
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
