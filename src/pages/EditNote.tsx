import { NoteData, Tag } from "../App"
import NoteForm from "../components/NoteForm"
import { useNote } from "../components/NoteLayout"

type NewNoteProps = {
    onEditNote: (id:string, data: NoteData) => void
    onAddTag: (data: Tag) => void
    availableTags: Tag[]
}


export default function EditNote({ onEditNote, onAddTag, availableTags }: NewNoteProps) {
    
    const note = useNote()
    return (
        <div className="text-white">
            <div className="border-b border-bg-300 pb-3 mb-5">
                <h1 className="text-2xl">Edit Note</h1>
            </div>
            <NoteForm onSubmit={data => onEditNote(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} title={note.title} markdown={note.markdown} tags={note.tags} />
        </div>
    )
}
