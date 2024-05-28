import { Navigate, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="my-4">
      <Routes>
        <Route path="/" element={<h1 className="text-2xl">Home</h1>} />
        <Route path="/new" element={<h1 className="text-2xl">new</h1>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
