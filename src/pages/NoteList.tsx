import { Link } from "react-router-dom"
import NoteCart from "../components/NoteCart"
import { Note, Tag } from "../App"
import { useMemo, useState } from "react"
import ReactSelectCreatable from "react-select/creatable"

type NoteListProps = {
    notes: Note[]
    availableTags: Tag[]
}

function NoteList({ notes, availableTags }: NoteListProps) {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState<string>("")

    const filteredNotes: Note[] = useMemo(() => {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
            (selectedTags.length === 0 || selectedTags.every(tag => {
                return note.tags.some(noteTag => noteTag.id === tag.id)
            }))
        })
    }, [title, selectedTags, notes])

    return (
        <div className="flex flex-col text-text-200">
            <div className="flex justify-between items-center text-white border-b border-bg-300 pb-3 mb-3">
                <h1 className="text-2xl">Note List</h1>
                <div className="space-x-2">
                    <Link to='/new'>
                        <button className="bg-primary-100 p-1 px-2 rounded-md hover:-translate-x-1 transition">Create</button>
                    </Link>
                    <button className="border border-bg-300 text-text-200 p-1 px-1.5 rounded-md hover:rounded-md">Edit Tags</button>
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
                        placeholder="Enter your tag..."
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
                        classNames={{
                            multiValue: () => {
                                return 'bg-primary-100 p-0.5 rounded-lg mb-[0.2rem] mr-[0.2rem] p-1'
                            },
                            multiValueRemove: () => {
                                return 'text-text-200 rounded-full hover:text-red-300 ml-0.5'
                            },
                            multiValueLabel: () => {
                                return 'text-text-200 leading-none'
                            },
                            control: () => {
                                return `bg-transparent border border-bg-200 rounded-lg px-3 p-1`
                            },
                            input: () => {
                                return 'text-text-200'
                            },
                            menu: () => {
                                return "bg-bg-300 rounded-md mt-1 overflow-x-auto "
                            },
                            option: (state) => {
                                return `${state.isFocused
                                    ? 'bg-bg-200'
                                    : 'active:bg-bg-200 '} 
                               !cursor-pointer p-2`
                            },
                            noOptionsMessage: () => {
                                return 'p-2'
                            },
                            placeholder: () => {
                                return 'text-bg-300'
                            },
                            indicatorsContainer: () => {
                                return 'cursor-pointer'
                            },
                            clearIndicator: () => {
                                return 'border-r border-bg-300 pr-1'
                            }
                        }}
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
            <div className="grid grid-cols-2 gap-5">
                {filteredNotes.map(note => (
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