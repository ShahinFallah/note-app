import { Link } from "react-router-dom"
import { useNote } from "../components/NoteLayout"

type NoteProps = {
  onDeleteNote: (id: string) => void
}

export default function Note({ onDeleteNote }: NoteProps) {

  const note = useNote()

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center text-white border-b border-bg-300 pb-3 mb-3">
        <h1 className="text-2xl">Note</h1>
        <div className="space-x-2">
          <Link to='edit'>
            <button className="bg-primary-100 p-1 px-2 rounded-md hover:-translate-x-1 transition">Edit</button>
          </Link>
          <button onClick={() => onDeleteNote(note.id)} className="border border-red-900 text-red-100 p-1 px-1.5 rounded-md hover:rounded-md">Delete</button>
          <Link to='..'>
            <button className="border border-bg-300 text-text-200 p-1 px-1.5 rounded-md hover:rounded-md">Back</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 mt-5">
        <h1 className="text-3xl text-white font-[650] w-1/2 break-words">{note.title}</h1>
        <div className="flex flex-wrap grow gap-1 justify-end">
          {note.tags.map(tag => (
            <span key={tag.id} className="text-sm text-white p-1 bg-primary-100 rounded-lg truncate max-w-32">#{tag.label}</span>
          ))}
        </div>
      </div>
      <div className="text-text-200 border border-bg-200 p-2.5 rounded-2xl mt-4">{note.markdown}</div>
    </div>
  )
}
