import { Link } from "react-router-dom"
import NoteCart from "../components/NoteCart"
import { Note } from "../App"

type NoteListProps = {
    notes: Note[]
}

function NoteList({ notes }: NoteListProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center text-white border-b border-bg-300 pb-3 mb-3">
                <h1 className="text-2xl">Note List</h1>
                <div className="space-x-2">
                    <Link to='/new'>
                        <button className="bg-primary-100 p-1 px-2 rounded-md hover:-translate-x-1 transition">Create</button>
                    </Link>
                    <button className="border border-bg-300 text-text-200 p-1 px-1.5 rounded-md hover:rounded-md">Edit Tags</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {notes.map(note => (
                    <NoteCart
                        key={note.id}
                        title={note.title}
                        tags={note.tags}
                        id={note.id} />
                ))}
            </div>
        </div>
    )
}

export default NoteList