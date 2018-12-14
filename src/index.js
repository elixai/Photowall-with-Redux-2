// S7.L44.0.
/*
  Why use redux? 
    - make the 'state' of your application more predicatable
      - the more complex an application, the more bugs 
        - Complexity = Bugs!
    - Redux gives us an organized way to 'store' our data
      - app data is centralized 
      - 'state' is read-only
        - for the 'state' that lives inside of the 'store', a 
        component can never directly change that 'state'
          - all it can do is emit an 'action' describing how it 
          want to update the 'state', which ensures that all changes
          happen 1by1 in a very strict order.
      - All 'state' changes happen in a single place -- the Route Reducer
      - Route Reducer then updates 'state'.
        - Reduce is the only thing that updates the 'state'
    - Easier to keep track of changes.

    1. Store
    2. Read-only
    3. Reducer

*/

import React from 'react'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom'
// S7.L45.1.
import { createStore } from 'redux'
// S7.L46.4.
// import rootReducer
import rootReducer from './redux/reducer'
// S7.L47.10.
// Import the Provider
  // - Provider is used to Provide our Store to its child Components.
import { Provider } from 'react-redux'
// S7.L47.19.
// Remove Main.js as it is imported now in App.js
//import Main from './Components/Main'
// S7.L47.20.
// import App for Connecting our Components
import App from './Components/App'

// S7.L45.2.
/* There are 3 parts to Redux:
    1. Store - store gets its state -- its data -- from Reducers
    2. Reducers - Action is passed to a Reducer, which gives the Store its updated state
    3. Actions - to change data, the Store needs to dispatch an Action to the Reducer
*/
// S7.L46.5.
// Pass in the Reducer from ./redux/postReducer.js named rootReducer
// S7.L46.9.
// Our Store, upon launch, will have 'state' equal to the initial posts.
const store = createStore(rootReducer)

// S7.L47.11.
// Set up the Provider
  // set the props Store equal to the 'store' we just created. We need to "provide" the
  // 'store' to Main.js so it can be accessed there and generate the photos in our Photowall
  // based on the data in our 'store' not from the Component state.
// S7.L47.12.
// Create a new file ./Components/App.js, which will be used to connect our 'store' to our 
// Main component. 
// S7.L47.21.
// Render out the Connected Component App (by replacing Main with App) now that App is 
// Connected to our 'store'.
ReactDOM.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, 
  document.getElementById('root')
)
