import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
      <Header></Header>
    {children}
    <Footer></Footer>
  </div>
)