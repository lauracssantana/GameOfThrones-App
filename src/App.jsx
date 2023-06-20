import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Character } from "./pages/Character"
import { Header } from "./components/Header"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/character/:id" element={<Character />}> </Route>
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
