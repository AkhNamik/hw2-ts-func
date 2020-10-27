import React from "react"
import "./MainIcon.css"
import CatLogo from "../../../images/cat.png"
const MainIcon: React.FC = () => {
  return (
    <div className="mainIcon">
      <img src={CatLogo}></img>
    </div>
  )
}
export default MainIcon
