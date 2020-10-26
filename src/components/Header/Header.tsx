import React from "react"
import "./Header.css"
type HeaderTxt = {
  text: string
}
const Header: React.FC<HeaderTxt> = ({ text }) => {
  return (
    <header className="header">
      <h1>{text}</h1>
    </header>
  )
}
export default Header
