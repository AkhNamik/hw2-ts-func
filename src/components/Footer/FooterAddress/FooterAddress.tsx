import React from "react"
type Address = {
  text: string
}
const FooterAddress: React.FC<Address> = ({ text }) => {
  return (
    <div className="footerAddress">
      <p>{text}</p>
    </div>
  )
}
export default FooterAddress
