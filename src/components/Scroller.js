import React, { useRef } from 'react'
import { FullPage, Slide } from 'react-full-page'
import Header from './Header'
import Contact from './Contact'

const Scroller = () => {
  const FPRef = useRef(null)
  const handleContactScroll = i => {
    FPRef.current.scrollToSlide(i)
  }

  return (
    <FullPage ref={FPRef} controls>
      <Slide>
        <Header scrollFunc={handleContactScroll} />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
      <Slide>
        <div style={{ width: '100%', height: '100%', background: 'red' }} />
      </Slide>
      <Slide>
        <div style={{ width: '100%', height: '100%', background: 'blue' }} />
      </Slide>
    </FullPage>
  )
}

export default Scroller
