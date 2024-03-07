import Navbar from "./Navbar"
import Pricing from "./pages/About"
import Home from "./pages/Home"
import About from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Pricing />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App