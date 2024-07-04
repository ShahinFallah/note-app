import { FormEvent, useRef, useState } from "react"
import ReactSelectCreatable from "react-select/creatable"
import { NoteData, Tag } from "../App"
import { v4 as uuIdv4 } from 'uuid'
import { Link, useNavigate } from "react-router-dom"
import reactSelectStyle from "../utils/reactSelectStyle"

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (data: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>

export default function NoteForm({
    onSubmit,
    onAddTag,
    availableTags,
    title = '',
    markdown = '',
    tags = [] }: NoteFormProps) {
    const navigate = useNavigate()
    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags
        })

        navigate('/')
    }



    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex gap-3 mb-3">
                <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="title" className="text-text-200">Title</label>
                    <input
                        ref={titleRef}
                        required
                        defaultValue={title}
                        id="title"
                        type="text"
                        className="bg-transparent border border-bg-200 rounded-lg p-1.5 px-4 focus:outline-none text-text-200 focus:border-blue-500 transition"
                        placeholder="Enter your tag..." />
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="tag" className="text-text-200">tags</label>
                    <ReactSelectCreatable
                        isMulti
                        unstyled
                        id={'tag'}
                        classNames={reactSelectStyle}
                        onCreateOption={label => {
                            const newValue = { label: label, id: uuIdv4() }
                            setSelectedTags(prevTags => [...prevTags, newValue])
                            onAddTag(newValue)

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
            <div className="flex flex-col gap-1">
                <label htmlFor="markdown">body</label>
                <textarea
                    defaultValue={markdown}
                    ref={markdownRef}
                    required
                    placeholder="Enter your body..."
                    rows={20}
                    className="bg-transparent border border-bg-200 rounded-lg transition focus:outline-none focus:border-blue-500 p-2" />
            </div>
            <div className="flex justify-end space-x-2 mt-2">
                <button className="bg-primary-100 rounded-md px-2">Save</button>
                <Link to='..'>
                    <button type="button" className="border border-bg-200 px-2 p-0.5 rounded-md">Cancel</button>
                </Link>
            </div>
        </form>
    )
}