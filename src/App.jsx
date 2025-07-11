import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EditPage from "./pages/EditPage"
import CreatePage from "./pages/CreatePage"
import SinglePage from "./pages/SinglePage"

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Routes>
        {/* // HomePage Component lai routing ma import gareko : <HomePage/> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-page/:id" element={<EditPage />} />
        <Route path="/create-page" element={<CreatePage />} />
        {/* //yo dynamic routing ho  */}
        <Route path="/single-page/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
