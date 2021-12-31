import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from './packages/react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="about" element={<>about</>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
