import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 75px 32px;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  width: 40%;
  position: relative;
  height: 315px;

  .icon {
    position: absolute;
    right: 13px;
    bottom: 18px;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 50%;
`

export const Span = styled.span`
  margin-right: 11px;
  color: ${({ color }) => color};
`
