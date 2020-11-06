import React from 'react'
import ReactDOM from 'react-dom'

import './scss/index.scss'

import App from './components/app'
import TestService from './services/test-service'
import { ServiceProvider } from './components/service-context'
import ErrorBoundry from './components/error-boundry'

const service = new TestService()

ReactDOM.render(
  <ErrorBoundry>
    <ServiceProvider value={service}>
      <App />
    </ServiceProvider>
  </ErrorBoundry>,
  document.getElementById('root')
)