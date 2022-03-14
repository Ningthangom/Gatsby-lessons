import React from "react";
import Layout from '../components/Layout';
import '../components/style.css';


// styled component 
import styled from 'styled-components'
const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1> this is about page</h1>
        <p>
          Gatsby is a React-based, GraphQL powered static site generator. It
          combines together the best parts of React, webpack, react-router,
          GraphQL, and other front end tools to provide excellent developer
          experience. Gatsby is far more than typical static site generator
          though. You can think of it more like a modern front-end framework.
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: orange;
  text-transform: uppercase;
  h1 {
    color: red;
  }
`

export default about;
