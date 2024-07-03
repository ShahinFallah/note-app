import { NoteData, Tag } from "../App"
import NoteForm from "../components/NoteForm"

type NewNoteProps = {
    onCreateNote: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

function NewNote({ onCreateNote, onAddTag, availableTags }: NewNoteProps) {

    return (
        <div className="text-white">
            <div className="border-b border-bg-300 pb-3 mb-5">
                <h1 className="text-2xl">New Note</h1>
            </div>
            <NoteForm onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={availableTags} />
        </div>
    )
}

export default NewNote