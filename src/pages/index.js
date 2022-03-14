import React from "react"
import { Link } from "gatsby";
import {page, text} from '../examples/home.module.css'

// import components
import Layout from '../components/Layout'

// import styleComponents
import { ExampleButton } from "../examples/button";

export default function Home() {
  return (
    <Layout>

      <div className={page}>
        {" "}
        <ExampleButton > Click me </ExampleButton>
        <h1>Home page</h1>
        <Link to="/company/history"> history</Link>
        <br />
        <a href="/about" > regular link</a>
        <p className={text}>whatever we do will have consequences</p>

      </div>
    </Layout>
  )
  
}
