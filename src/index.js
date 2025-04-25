import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index'
import 'core-js'

// CoreUI styles
import '@coreui/coreui/dist/css/coreui.min.css'
import 'simplebar-react/dist/simplebar.min.css'

// Custom styles
import './styles/layout.css'

import App from './App'

const root = createRoot(document.getElementById('root'))

const AppWrapper = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

root.render(<AppWrapper />)
