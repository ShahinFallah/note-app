import { NoteData, Tag } from "../App"
import NoteForm from "../components/NoteForm"

type NewNoteProps = {
    onCreateNote: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
}

function NewNote({ onCreateNote, onAddTag }: NewNoteProps) {

    return (
        <div className="text-white">
            <div className="border-b border-bg-300 pb-3 mb-5">
                <h1 className="text-2xl">New Note</h1>
            </div>
            <NoteForm onSubmit={onCreateNote} onAddTag={onAddTag} />
        </div>
    )
}

export default NewNote