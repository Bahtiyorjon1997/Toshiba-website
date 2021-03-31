import React from 'react'
import styled from 'styled-components'
import HomePage from './Components/HomePage'
import About from "./Components/About"

const App = () => {
  return (
    <AppWrapper>
      <HomePage></HomePage>
      <About></About>

    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
`
