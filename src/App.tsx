import { Route, Routes } from "react-router-dom"
import NoteList from "./pages/NoteList"
import NewNote from "./pages/NewNote"

function App() {
  return (
    <div className="m-4 max-w-5xl mx-auto p-5">
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/new" element={<NewNote />} />
      </Routes>
    </div>
  )
}

export default App
