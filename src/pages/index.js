/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react'
import { useSprings, animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'

import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
import SEO from '../components/seo'
import Contact from '../components/Contact'
import Header from '../components/Header'

const pages = [Header, Contact]

function Viewpager() {
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: 'block',
  }))
  const bind = useDrag(
    ({
      down,
      delta: [xDelta],
      direction: [xDir],
      distance,
      cancel,
    }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1,
          )),
        )
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: 'none' }
        const x =
          (i - index.current) * window.innerWidth +
          (down ? xDelta : 0)
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1
        return { x, sc, display: 'block' }
      })
    },
  )
  return props.map(({ x, display, sc }, i) => (
    <animated.div
      {...bind()}
      key={i}
      style={{
        display,
        transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
      }}
    >
      <animated.div
        style={{
          transform: sc.interpolate(s => `scale(${s})`),
          backgroundImage: `url(${pages[i]})`,
        }}
      >
        {pages[i]()}
      </animated.div>
    </animated.div>
  ))
}
const Root = styled.div`
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
      box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
        0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
    }
  }
`
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Root>
        <Viewpager />
      </Root>
    </Layout>
  )
}

export default IndexPage
