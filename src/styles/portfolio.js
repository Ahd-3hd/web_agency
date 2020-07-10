import styled from 'styled-components'

export const PortfolioSection = styled.section`
  width: 100%;
  height: 100vh;
`

export const CardWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Logo = styled.div`
  width: 30%;
  position: relative;
  justify-self: flex-end;

  .icon {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 20%;
  }
`

export const Content = styled.div`
  width: 50%;
`

export const Span = styled.span`
  margin-right: 11px;
  color: ${({ color }) => color};
`
