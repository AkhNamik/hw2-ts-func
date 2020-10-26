import React from "react"
type Props = {
  amount: number
  text: string
}
const Statistics: React.FC<Props> = (props) => {
  return (
    <div className="formInfo">
      <p>{props.amount}</p>
      <p>{props.text}</p>
    </div>
  )
}
export default Statistics
