import React from 'react'
import styled from 'styled-components'

const Header = () => {
  const menuList = ['Projects', 'Posts', 'Ideas']
  return (
    <HeaderContainer>
      <Logo>keymon2</Logo>
      <MenuContainer>
        {menuList.map((item, index) => (
          <MenuItem
            onClick={() => {
              console.log(item)
            }}
            key={index * 107}
          >
            {item}
          </MenuItem>
        ))}
      </MenuContainer>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
  border: 1px solid blue;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  /* color: #f5b301; */
  color: #eb8634;
  margin-left: 1rem;
`
const MenuContainer = styled.div`
  display: inherit;
  align-items: inherit;
  border: 1px solid black;
`
const MenuItem = styled.div`
  padding: 10px;
  color: #eb8634;
  &:hover {
    background-color: #3b3f46;
    cursor: pointer;
  }
`
export default Header
