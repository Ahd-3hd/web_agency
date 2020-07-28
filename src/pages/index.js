import React, { useRef } from 'react'
import { isMobile, MobileView } from 'react-device-detect'
import { useSpring } from 'react-spring'
import { FullPage, Slide } from 'react-full-page'

import Layout from '../components/layout'

import SEO from '../components/seo'
import Chat from '../components/Chat'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Navbar from '../components/Navbar'

const IndexPage = () => {
  const sections = [Header, Portfolio, Team, Contact]
  const sectionsRefs = sections.map(() => useRef(null))
  const [, setY] = useSpring(() => ({ y: 0 }))

  /* eslint-disable no-param-reassign */
  const handleScroll = ref => {
    setY({
      y: sectionsRefs.slice(0, ref).reduce((acc, section) => {
        acc += section.current.getBoundingClientRect().height
        return acc
      }, 0),
      reset: true,
      from: { y: window.scrollY },
      onFrame: ({ y }) => window.scroll(0, y),
      config: { mass: 1, tension: 170, friction: 50 },
    })
  }
  /* eslint-disable no-param-reassign */
  const renderSection = (Section, i) => <Section handleScroll={i === 0 ? handleScroll : null} key={Section} refs={sectionsRefs[i]} />

  const renderSections = () => {
    if (isMobile) return <MobileView>{sections.map((Section, i) => renderSection(Section, i))}</MobileView>
    return (
      <FullPage>
        {sections.map((Section, i) => (
          <Slide>{renderSection(Section, i)}</Slide>
        ))}
      </FullPage>
    )
  }

  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <Navbar handleScroll={handleScroll} />
        {renderSections()}
        <Chat />
      </Layout>
    </div>
  )
}

export default IndexPage
