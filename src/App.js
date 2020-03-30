import React, { useEffect } from 'react'
import {
  Layout,
  Header,
  Content,
  // Footer
} from './components'
import './App.scss'
import { scrollFunc } from './components/animationFunc'

export const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', scrollFunc)
  })
  return (
    <div className='App'>
      <Layout>
        <Header />
        <Content />
      </Layout>
    </div>
  )
}

export default App
