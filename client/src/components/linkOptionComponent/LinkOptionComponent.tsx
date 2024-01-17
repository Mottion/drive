import React from "react"
import { Container } from "./styles"
import { LinkOptionComponentProps } from "../../@types/LinkOptionComponentProps"

const LinkOptionComponent: React.FC<LinkOptionComponentProps> = ({fileName, icon, link}) => {
  return (
    <Container to={link}>
      {icon}
      {fileName}
    </Container>
  )
}

export default LinkOptionComponent