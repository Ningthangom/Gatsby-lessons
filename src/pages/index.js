import React from "react"
import { Link } from "gatsby";

// import components
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home page</h1>
      <Link to="/company/history"> history</Link>
      <br />
      <a href="/about"> regular link</a>
    </Layout>
  )
  
}
