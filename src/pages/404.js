import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Eva Maldonado</title>
      <link rel="canonical" href="https://evahmaldonado.com/404" />
      <meta 
        name="description" 
        content="Page not found" 
      />
      <html lang="en" amp />
    </Helmet>
    <section className="error">
      <h2>Oops!</h2>
      <p>The page you are looking for does not exist. Go back to <Link to="/">home</Link>.</p>
    </section>
  </Layout>
)