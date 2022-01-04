import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { RecoilRoot } from 'recoil'

import App from './App'
import './index.css'

const client = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </RecoilRoot>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
