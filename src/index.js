import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducer/rootReducer'
import * as serviceWorker from './serviceWorker'
// import Book from './component/book'
// import Terminal from './component/terminal'
import './component/styles.scss'
const Book = lazy(() => import('./component/book'))
const Terminal = lazy(() => import('./component/terminal'))
// const Book = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import('./component/book')), 1000)
//   })
// })

const store = createStore(rootReducer, applyMiddleware(logger))
function App () {
  return (
    <Provider store={store}>
      <Suspense fallback={<div className='book'><div className='book-light' /></div>}>
        <Book />
      </Suspense>
      <Suspense fallback={<div className='book'><div className='book-light' /></div>}>
        <Terminal />
      </Suspense>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
