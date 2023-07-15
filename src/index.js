import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import store from "../src/redux/store.js"
import { Provider } from 'react-redux'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
<Provider store={store}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>
)