import React from 'react'
import styled from 'styled-components'
import HomePage from './Components/HomePage'

const App = () => {
  return (
    <AppWrapper>
      <HomePage></HomePage>

    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
`
