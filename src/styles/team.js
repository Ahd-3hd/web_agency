import styled from 'styled-components'

export const TeamSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10rem 0;
  }
`

export const CardWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`

export const JobTitle = styled.div`
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  color: rgba(36, 36, 36, 0.8);
  margin-bottom: 1.5rem;
`

export const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: 1rem auto;
`

export const Link = styled.a`
  font-size: 14px;
  color: #0077b5;
  text-decoration: none;
`
