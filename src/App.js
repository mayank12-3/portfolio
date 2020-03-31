import React, { useEffect, useState } from 'react'
import {
  Layout,
  Header,
  Content,
  // Footer
} from './components'
import './App.scss'
import { scrollFunc } from './components/animationFunc'

export const App = () => {
  const [showLoader, loaderStatus] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc)
    setTimeout(() => {
      loaderStatus(false)
    }, 2000)
  })
  return (
    <div className='App'>
      {showLoader
        ? <div className='page-loader'>
          <div className='loader-content'>
            D
            <div class='spinner-border text-light' role='status' />
          </div>
        </div>
        : <Layout>
          <Header />
          <Content />
        </Layout>
      }
    </div>
  )
}

export default App
