import React, { useRef } from 'react'
import { FullPage, Slide } from 'react-full-page'
import { BrowserView, MobileView } from 'react-device-detect'
import Header from './Header'
import Contact from './Contact'
import Portfolio from './Portfolio'
// import Team from './Team'

const Scroller = () => {
  const FPRef = useRef(null)
  const handleContactScroll = i => {
    FPRef.current.scrollToSlide(i)
  }

  return (
    <>
      <BrowserView>
        <FullPage ref={FPRef}>
          <Slide>
            <Portfolio />
          </Slide>
          <Slide>
            <Header scrollFunc={handleContactScroll} />
          </Slide>

          {/* <Slide>
            <Team />
          </Slide> */}
          <Slide>
            <Contact />
          </Slide>
        </FullPage>
      </BrowserView>
      <MobileView>
        <Portfolio />

        <Header scrollFunc={handleContactScroll} />
        {/* <Team /> */}
        <Contact />
      </MobileView>
    </>
  )
}

export default Scroller
