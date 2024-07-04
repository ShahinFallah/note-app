import { Route, Routes } from "react-router-dom"
import NoteList from "./pages/NoteList"
import NewNote from "./pages/NewNote"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { useMemo } from "react"
import { v4 as uuIdv4 } from 'uuid'
import EditNote from "./pages/EditNote"
import Note from "./pages/Note"
import { NoteLayout } from "./components/NoteLayout"

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

  function onCrateNote(data: NoteData) {
    setNotes(prevNote => {
      return [...prevNote, { ...data, id: uuIdv4(), tagsId: data.tags.map(tag => tag.id) }]
    })
  }

  function onEditNote(id: string, { tags, ...data }: NoteData) {
    setNotes(prevNotes => prevNotes.map(note => {
      if (note.id === id) {
        return { ...note, ...data, tagsId: tags.map(tag => tag.id) }
      } else {
        return note
      }
    }))
  }

  function onDeleteNote(id: string) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }

  function addTag(tag: Tag) {
    setTags(prevTags => {
      return [...prevTags, tag]
    })
  }

  function onDeleteTag(id: string) {
    setTags(prevTags => prevTags.filter(tag => tag.id !== id))
  }

  function onEditTag(id: string, label: string) {
    setTags(prevTags => prevTags.map(tag => {
      if (tag.id === id) {
        return {...tag, label: label}
      } else {
        return tag
      }
    }))
  }

  return (
    <div className="m-4 max-w-5xl mx-auto p-5">
      <Routes>
        <Route path="/" element={<NoteList notes={notesWithTags} availableTags={tags} onDeleteTag={onDeleteTag} onEditTag={onEditTag} />} />
        <Route path="/new" element={<NewNote onCreateNote={onCrateNote} onAddTag={addTag} availableTags={tags} />} />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDeleteNote={onDeleteNote} />} />
          <Route path='edit' element={<EditNote onEditNote={onEditNote} onAddTag={addTag} availableTags={tags} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App