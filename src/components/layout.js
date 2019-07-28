import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Header from "./header"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`

export default ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
)
