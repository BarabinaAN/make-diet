import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import TestService from './services/test-service'
import { ServiceProvider } from './components/service-context'
import './scss/index.scss'

const service = new TestService()

ReactDOM.render(
  <ServiceProvider value={service}>
    <App />
  </ServiceProvider>,
  document.getElementById('root')
)