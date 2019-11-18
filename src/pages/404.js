import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <section className="error">
      <h2>Oops!</h2>
      <p>The page you are looking for does not exist. Go back to <Link to="/">home</Link>.</p>
    </section>
  </Layout>
)