import React from "react"
import "./MainForm.css"
import FormStatistics from "../FormStatistics/FormStatistics"
import ProfileIcon from "../../../images/252.png"
type FormTxt = {
  text: string
}
const MainForm: React.FC<FormTxt> = ({ text }) => {
  return (
    <div className="mainBox">
      <h2>{text}</h2>
      <div className="cnvs"></div>
      <div className="mainBoxImg">
        <img src={ProfileIcon}></img>
      </div>
      <FormStatistics />
    </div>
  )
}
export default MainForm
