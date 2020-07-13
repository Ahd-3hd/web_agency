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
  </FullPage>
)

export default Scroller
