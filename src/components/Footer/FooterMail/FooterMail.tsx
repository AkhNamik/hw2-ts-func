import React from "react"
type Mail = {
  text: string
}
const FooterMail: React.FC<Mail> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
export default FooterMail
