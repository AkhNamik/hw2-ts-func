import React from "react"
import "./Main.css"
import MainForm from "./MainForm/MainForm"
import MainIcon from "./MainIcon/MainIcon"
const Main: React.FC = () => {
  return (
    <main id="main">
      <MainForm />
      <MainIcon />
    </main>
  )
}
export default Main
