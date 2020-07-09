/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react'
import { useSprings, animated, useSpring, config } from 'react-spring'
import { useWheel } from 'react-use-gesture'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'

import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
import SEO from '../components/seo'
import Contact from '../components/Contact'
import Header from '../components/Header'

const IndexPage = () => {
  const [y, setY] = useSpring(() => ({ y: 0 }))
  const layoutRef = useRef(null)
  const bind = useWheel(state => {
    // console.log(state.first)
    // console.log(state.direction[1])

    if (state.first) {
      if (state.direction[1] > 0) {
        setY({
          y: y.y.lastPosition + window.innerHeight,
          reset: true,
          from: { y: window.scrollY },
          config: config.wobbly,
          onFrame: ({ y }) => {
            console.log(y, 'hi')
            console.log(window.innerHeight, 'bye')
            window.scroll(0, y)
          },
        })
      } else if (state.direction[1] < 0) {
        setY({
          y: y.y.lastPosition - window.innerHeight,
          reset: true,
          from: { y: window.scrollY },
          config: config.wobbly,
          onFrame: ({ y }) => {
            console.log(y, 'hi')
            console.log(window.innerHeight, 'bye')
            window.scroll(0, y)
          },
        })
      }
    }
  })
  useEffect(() => {})
  return (
    <div ref={layoutRef} {...bind()}>
      <Layout
        style={{
          height: '100vh',
          overflow: 'scroll',
        }}
      >
        <SEO title="Home" />
        <Header />
        <Contact />
        <div
          style={{
            height: '100vh',
            background: 'red',
          }}
        />
        <div
          style={{
            height: '100vh',
            background: 'blue',
          }}
        />
        <button
          onClick={() => {
            setY({
              y: y.y.lastPosition - window.innerHeight,
              reset: true,
              from: { y: window.scrollY },
              config: config.wobbly,
              onFrame: ({ y }) => window.scroll(0, y),
            })
          }}
          style={{
            position: 'fixed',
            top: 0,
            right: '10rem',
            zIndex: 1000,
          }}
        >
          Scroll up
        </button>
        <button
          onClick={() => {
            setY({
              y: y.y.lastPosition + window.innerHeight,
              reset: true,
              from: { y: window.scrollY },
              config: config.wobbly,
              onFrame: ({ y }) => window.scroll(0, y),
            })
          }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          Scroll down
        </button>
      </Layout>
    </div>
  )
}

export default IndexPage
