import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import Header from './Header'
import Contact from './Contact'

const Scroller = () => (
  <FullPage>
    <Slide>
      <Header />
    </Slide>
    <Slide>
      <Contact />
    </Slide>
    <Slide>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'red',
        }}
      />
    </Slide>
    <Slide>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'blue',
        }}
      />
    </Slide>
  </FullPage>
)

export default Scroller
