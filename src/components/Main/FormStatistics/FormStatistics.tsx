import React from "react"
import "./FormStatistics.css"
import Statistics from "./Statistics/Statistics"
const FormStatistics: React.FC = () => {
  return (
    <div className="formBoxStatistics">
      <Statistics amount={4560} text="Followers" />
      <div className="cnvss"></div>
      <Statistics amount={550} text="Following" />
    </div>
  )
}
export default FormStatistics
