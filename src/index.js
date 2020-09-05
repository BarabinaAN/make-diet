import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import TestService from './services/test-service'
import { ServiceProvider } from './components/service-context'
import ErrorBoundry from './components/error-boundry'

import './scss/index.scss'

const service = new TestService()

ReactDOM.render(
  <ErrorBoundry>
    <ServiceProvider value={service}>
      <App />
    </ServiceProvider>
  </ErrorBoundry>,
  document.getElementById('root')
)