/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'
import Contact from './Contact'
import Header from './Header'

const pages = [Header, Contact]
const Wrapper = styled(animated.div)`
  left: 0;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
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
const Root = () => {
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
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({
    y: i * defaultHeight,
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
      if (down && distance > defaultHeight / 2)
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
          (i - index.current) * defaultHeight + (down ? yDelta : 0)
        const sc = down ? 1 - distance / defaultHeight / 2 : 1
        return { y, sc, display: 'block' }
      })
    },
    onWheel: ({
      delta: [, yDelta],
      direction: [, yDir],
      distance,
      cancel,
    }) => {
      if (distance > defaultHeight / 7)
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
        const y = (i - index.current) * defaultHeight + yDelta
        const sc = 1
        return { y, sc, display: 'block' }
      })
    },
  })
  return props.map(({ y, display, sc }, i) => (
    <Wrapper {...bind()}>
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
    </Wrapper>
  ))
}

export default Root
