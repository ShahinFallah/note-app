import { Route, Routes } from "react-router-dom"
import NoteList from "./pages/NoteList"
import NewNote from "./pages/NewNote"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { useMemo } from "react"
import { v4 as uuIdv4 } from 'uuid'

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagsId: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', [])

  const notesWithTags = useMemo(() => {
    return notes.map(({ tagsId, ...note }) => {
      return { ...note, tags: tags.filter(tag => tagsId.includes(tag.id)) }
    })
  }, [notes, tags])

  function onCrateNote({ tags, ...data }: NoteData) {
    setNotes(prevNote => {
      return [...prevNote, { ...data, id: uuIdv4(), tagsId: tags.map(tag => tag.id) }]
    })
  }

  function addTag(tag: Tag) {
    setTags(prevTags => {
      return [...prevTags, tag]
    })
  }

  return (
    <div className="m-4 max-w-5xl mx-auto p-5">
      <Routes>
        <Route path="/" element={<NoteList notes={notesWithTags} />} />
        <Route path="/new" element={<NewNote onCreateNote={onCrateNote} onAddTag={addTag} />} />
      </Routes>
    </div>
  )
}

export default App