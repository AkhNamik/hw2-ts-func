import React from "react"
import "./Footer.css"
import FooterAddress from "./FooterAddress/FooterAddress"
import FooterIcon from "./FooterIcon/FooterIcon"
import FooterMail from "./FooterMail/FooterMail"
const Footer = () => {
  return (
    <footer id="footer">
      <FooterAddress text="365 Freebies. 007/365" />
      <FooterIcon />
      <FooterMail text="@anakarenart" />
    </footer>
  )
}
export default Footer
