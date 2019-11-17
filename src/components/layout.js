import React from "react"
import Header from "./header"

export default ({ children }) => (
  <div>
    <Header />
    <div className="container">
      {children}
    </div>
  </div>
)
