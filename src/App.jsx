import React from 'react'
import {Provider} from 'react-redux'
import { store } from './redux/store'
import Message from './Messages/Message'
function App() {
  return (
    <div>
      <Provider store = {store}>
        <hr />
        <Message/>
      </Provider>
    </div>
  )
}

export default App