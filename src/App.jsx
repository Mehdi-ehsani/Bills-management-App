import HomePage from "./components/home/HomePage"
import About from "./components/pages/about/About"
import Contact from "./components/pages/contact/Contact"
import Bills from "./components/pages/bills/Bills"
import { Route , Routes  } from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/bills" element={<Bills/>} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
