// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { useTransition } from 'react-spring'
import {
  Wrapper,
  TitleContainer,
  FixedTitle,
  AnimatedTitleContainer,
  AnimatedTitle,
  AnimatedCircle1,
  AnimatedCircle2,
  AnimatedCircle3,
  AnimatedCircle4,
  AnimatedCircle5,
} from './Header.style'
import { RectButton } from './Buttons'
import { ButtonText } from './typography'
import { colors } from '../utils'

const Header = () => {
  const [toggleBg, setToggleBg] = useState(false)
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: colors.secondary,
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        transform: 'perspective(600px) rotateX(180deg)',
        color: colors.blue,
      },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: colors.red },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: colors.primary },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(
      setTimeout(() => set(['GREAT', 'UNIQUE', 'AMAZING']), 2000),
    )
    ref.current.push(
      setTimeout(() => set(['GREAT', 'AMAZING']), 5000),
    )
    ref.current.push(
      setTimeout(() => set(['GREAT', 'UNIQUE', 'AMAZING']), 8000),
    )
    setTimeout(() => reset(), 13000)
  }, [])

  useEffect(() => reset(), [])
  return (
    <Wrapper bg={toggleBg}>
      <TitleContainer>
        <FixedTitle color={colors.primary}>
          LET&apos;S MAKE SOMETHING
        </FixedTitle>
        {transitions.map(
          ({ item, props: { innerHeight, ...rest }, key }) => (
            <AnimatedTitleContainer
              className="transitions-item"
              key={key}
              style={rest}
            >
              <AnimatedTitle
                style={{ overflow: 'hidden', height: innerHeight }}
              >
                {item}
              </AnimatedTitle>
            </AnimatedTitleContainer>
          ),
        )}
      </TitleContainer>
      <RectButton>
        <ButtonText onClick={() => setToggleBg(!toggleBg)}>
          Change Colors
        </ButtonText>
      </RectButton>
      <AnimatedCircle1 />
      <AnimatedCircle2 />
      <AnimatedCircle3 />
      <AnimatedCircle4 />
      <AnimatedCircle5 />
    </Wrapper>
  )
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
