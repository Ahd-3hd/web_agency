/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react'
import { useSprings, animated, useSpring, config } from 'react-spring'
import { useWheel, useGesture, useDrag } from 'react-use-gesture'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'

import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
import SEO from '../components/seo'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Chat from '../components/Chat'
import { RoundButton } from '../components/Buttons'
import CallIcon from '../static/CallIcon.svg'

const pages = [Header, Contact]

const Root = styled(animated.div)`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')
      39 39,
    auto;
  > div {
    position: absolute;
    width: 100vw;
    height: 100vh;
    will-change: transform;
    > div {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 100%;
      height: 100%;
      will-change: transform;
      /* box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
        0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6); */
    }
  }
`
function Viewpager() {
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({
    y: i * window.innerHeight,
    sc: 1,
    display: 'block',
    config: {
      mass: 1,
      tension: 170,
      friction: 50,
    },
  }))
  const bind = useGesture({
    onDrag: ({
      down,
      delta: [, yDelta],
      direction: [, yDir],
      distance,
      cancel,
    }) => {
      if (down && distance > window.innerHeight / 2)
        cancel(
          (index.current = clamp(
            index.current + (yDir > 0 ? -1 : 1),
            0,
            pages.length - 1,
          )),
        )
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: 'none' }
        const y =
          (i - index.current) * window.innerHeight +
          (down ? yDelta : 0)
        const sc = down ? 1 - distance / window.innerHeight / 2 : 1
        return { y, sc, display: 'block' }
      })
    },
    onWheel: ({
      delta: [, yDelta],
      direction: [, yDir],
      distance,
      cancel,
    }) => {
      if (distance > window.innerHeight / 7)
        cancel(
          (index.current = clamp(
            index.current + (yDir > 0 ? -1 : 1),
            0,
            pages.length - 1,
          )),
        )
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: 'none' }
        const y = (i - index.current) * window.innerHeight + yDelta
        const sc = 1
        return { y, sc, display: 'block' }
      })
    },
  })
  return props.map(({ y, display, sc }, i) => (
    <Root {...bind()}>
      <animated.div
        key={i}
        style={{
          display,
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
        }}
      >
        <animated.div
          style={{
            transform: sc.interpolate(s => `scale(${s})`),
            backgroundImage: `url(${pages[i]})`,
          }}
        >
          {React.createElement(pages[i])}
        </animated.div>
      </animated.div>
    </Root>
  ))
}
const FixedContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const AnimatedContainer = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ChatButton = styled(RoundButton)`
  position: fixed;
  right: 0;
  bottom: 0;
`

const IndexPage = () => {
  let defaultHeight
  if (typeof window !== `undefined`) {
    defaultHeight = window.innerHeight
  }
  const useWindowSize = () => {
    const [dimensions, setDimensions] = useState({
      windowHeight: defaultHeight,
    })

    useEffect(() => {
      const handler = () =>
        setDimensions({
          windowHeight: window.innerHeight,
        })

      window.addEventListener(`resize`, handler)
      return () => window.removeEventListener(`resize`, handler)
    }, [])

    return dimensions
  }
  const [toggleChat, setToggleChat] = useState(false)
  const [y, setY] = useState(defaultHeight)
  const scrollEffect = useSpring({
    from: {
      transform: `translateY(${y}px)`,
    },
    to: {
      transform: `translateY(${y - defaultHeight}px)`,
    },
    config: { mass: 1, tension: 210, friction: 20 },
  })

  const scrollBind = useGesture({
    onWheel: ({ direction, first }) => {
      if (direction[1] > 0 && first && y - defaultHeight >= 0) {
        // scroll down
        setY(y - defaultHeight)
      } else if (direction[1] < 0 && first && y <= 0) {
        // scroll up
        setY(y + defaultHeight)
      }
    },
    onDrag: ({ direction }) => {
      if (direction[1] < 0 && y - defaultHeight >= 0) {
        // scroll down
        setY(y - defaultHeight)
      } else if (direction[1] > 0 && y <= 0) {
        // scroll up
        setY(y + defaultHeight)
      }
    },
  })
  const components = [Header, Contact]
  const [newY, setNewY] = useState(100)
  const newScroll = useSprings(
    components.length,
    components.map((component, i) => ({
      transform: `translateY(${newY * -(i + 1)}px)`,
    })),
  )
  const testScroll = useGesture({
    onWheel: state => {
      console.log(state)
      if (state.direction[1] > 0) {
        setNewY(-state.values[1])
      } else {
        setNewY(state.values[1])
      }
    },
  })

  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <Viewpager />
        {/* <FixedContainer {...scrollBind()}>
          <AnimatedContainer style={scrollEffect}>
            <Header />
            <Contact />
          </AnimatedContainer>
        </FixedContainer> */}
        <ChatButton
          width="50"
          iconColor="#ffffff"
          onClick={() => setToggleChat(!toggleChat)}
        >
          <CallIcon />
        </ChatButton>
        {toggleChat && <Chat />}
      </Layout>
    </div>
  )
}

export default IndexPage
