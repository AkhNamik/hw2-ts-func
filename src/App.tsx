import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import "./components/Wrapper.css"
const App: React.FC = () => {
  return (
    <div id="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default App
