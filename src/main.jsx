import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Sites
import Portfolio from 'page/Portfolio'

// Keep this for management sake as global settings
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <head>
      <link rel="icon" type="image/svg+xml" href="https://github.com/GustavoBrizola.png" />
      <title>Gustavo Brizola</title>
    </head>
    
    <div id='site'>
      <Portfolio/>
    </div>
  </StrictMode>,
)
