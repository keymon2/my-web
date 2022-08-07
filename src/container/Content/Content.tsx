import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}
const Content: FC<Props> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>
}
const ContentContainer = styled.div``
export default Content
