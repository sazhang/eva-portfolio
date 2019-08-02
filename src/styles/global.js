import styled from "@emotion/styled"

export const MainVideos = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem 1rem 0;
  @media (min-width: 1024px) {
    margin: -1rem 2rem 0;
  }
`

export const HalfFlexVideo = styled.div`
  width: 100%;
  padding: 1rem 0;
  @media (min-width: 1024px) {
    width: 50%;
    padding: 1rem;
  }
`

export const VideoTitleWrapper = styled.div`
  padding-top: 0.5rem;
`
