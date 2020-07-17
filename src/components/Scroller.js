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
    <FullPage ref={FPRef}>
      <Slide>
        <Header scrollFunc={handleContactScroll} />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
    </FullPage>
  )
}

export default Scroller
