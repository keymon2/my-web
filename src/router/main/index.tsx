import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <div>
      asdasdas
      <ProfileSection>profile</ProfileSection>
      <CheckTodoSection></CheckTodoSection>
    </div>
  )
}
const ProfileSection = styled.div`
  height: 23rem;
  text-align: center;
  border: 1px solid black;
`
const CheckTodoSection = styled.div`
  height: 15rem;
  text-align: center;
  border: 1px solid black;
`
export default Main
