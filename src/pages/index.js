/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react'
import { useSprings, animated, useSpring, config } from 'react-spring'
import { useWheel, useGesture } from 'react-use-gesture'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'

import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
import SEO from '../components/seo'
import Contact from '../components/Contact'
import Header from '../components/Header'

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

const IndexPage = () => {
  const [y, setY] = useState(window.innerHeight)
  const [maxHeight, setMaxHeight] = useState(0)
  const animatedContainerRef = useRef(null)
  const scrollEffect = useSpring({
    from: {
      transform: `translateY(${y}px)`,
    },
    to: {
      transform: `translateY(${y - window.innerHeight}px)`,
    },
    config: { mass: 1, tension: 210, friction: 20 },
  })

  const scrollBind = useGesture({
    onWheel: ({ direction, first }) => {
      if (direction[1] > 0 && first && y - window.innerHeight >= 0) {
        console.log(y)
        //scroll down
        setY(y - window.innerHeight)
      } else if (direction[1] < 0 && first && y <= 0) {
        console.log(y)
        //scroll up
        setY(y + window.innerHeight)
      }
    },
  })

  useEffect(() => {
    const numberOfChildren =
      animatedContainerRef.current.childNodes.length
    setMaxHeight(window.innerHeight * numberOfChildren)
  }, [])

  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <FixedContainer {...scrollBind()}>
          <AnimatedContainer
            style={scrollEffect}
            ref={animatedContainerRef}
          >
            <Header />
            <Contact />
          </AnimatedContainer>
        </FixedContainer>
      </Layout>
    </div>
  )
}

export default IndexPage
