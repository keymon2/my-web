/* eslint-disable no-console */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Main from '../../router/main'
import { devices } from '../../styles/GlobalStyle'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
const Layout = () => {
  return (
    <Body>
      <Wrap>
        <Header />
        <Content>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Content>
        <Footer />
      </Wrap>
    </Body>
  )
}

const Body = styled.body`
  width: 100vw;
  max-height: 1000000px;
  background-color: #ccc;
`
const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 1px dotted black;
  width: 1728px;
  height: inherit;

  @media ${devices.desktop.large} {
    width: 1376px;
  }
  @media ${devices.desktop.medium} {
    width: 1024px;
  }
  @media (max-width: 1040px) {
    width: calc(100% - 2rem);
  }
`
export default Layout

////Users/seungwonlee/code/codeTest/a.txt
