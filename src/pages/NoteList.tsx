import { Link } from "react-router-dom"
import NoteCart from "../components/NoteCart"
import { Note, Tag } from "../App"
import { useMemo, useState } from "react"
import ReactSelectCreatable from "react-select/creatable"
import reactSelectStyle from "../utils/reactSelectStyle"
import EditTagsModal from "../components/EditTagsModal"

type NoteListProps = {
    notes: Note[]
    availableTags: Tag[]
    onDeleteTag: (id: string) => void
    onEditTag: (id: string, label: string) => void
}

function NoteList({ notes, availableTags, onDeleteTag, onEditTag }: NoteListProps) {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState<string>("")
    const [showTagsModal, setShowTagsModal] = useState(false)

    const filteredNotes: Note[] = useMemo(() => {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
                (selectedTags.length === 0 || selectedTags.every(tag => {
                    return note.tags.some(noteTag => noteTag.id === tag.id)
                }))
        })
    }, [title, selectedTags, notes])

    return (
        <>
            <div className="flex flex-col text-text-200">
                <div className="flex justify-between items-center text-white border-b border-bg-300 pb-3 mb-3">
                    <h1 className="text-2xl">Note List</h1>
                    <div className="space-x-2">
                        <Link to='/new'>
                            <button className="bg-primary-100 p-1 px-2 rounded-md hover:-translate-x-1 transition">Create</button>
                        </Link>
                        <button onClick={() => setShowTagsModal(true)} className="border border-bg-300 text-text-200 p-1 px-1.5 rounded-md hover:rounded-md">Edit Tags</button>
                    </div>
                </div>
                <div className="flex gap-3 mb-7">
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="title" className="text-text-200">Title</label>
                        <input
                            required
                            id="title"
                            type="text"
                            className="bg-transparent border border-bg-200 rounded-lg p-1.5 px-4 focus:outline-none text-text-200 focus:border-blue-500 transition"
                            placeholder="Enter your title..."
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="tag" className="text-text-200">tags</label>
                        <ReactSelectCreatable
                            isMulti
                            unstyled
                            id={'tag'}
                            classNames={reactSelectStyle}
                            options={availableTags.map(tag => ({ label: tag.label, value: tag.id }))}
                            value={selectedTags.map(tag => ({ label: tag.label, value: tag.id }))}
                            onChange={tags => {
                                setSelectedTags(tags.map(tag => {
                                    return { label: tag.label, id: tag.value }
                                }))
                            }}
                        />
                    </div>
                </div>
                {notes.length !== 0
                    ? (
                <div className="grid grid-cols-2 gap-5">
                    {filteredNotes.map(note => (
                        <NoteCart
                            key={note.id}
                            title={note.title}
                            tags={note.tags}
                            id={note.id} />
                    ))}
                </div>

                    )
                    : (
                        <h1 className="text-center text-2xl mt-2 font-semibold text-text-200">There are no notes!</h1>
                    )}
            </div>
            {showTagsModal && <EditTagsModal
                onDeleteTag={onDeleteTag}
                onEditTag={onEditTag}
                availableTags={availableTags}
                setShowTagsModal={setShowTagsModal}
            />}
        </>

    )
}

export default NoteList