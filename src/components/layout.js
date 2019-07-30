import React from "react"
import styled from "@emotion/styled"
import Header from "./header"

const Container = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: lightgrey;
`

export default ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
)
