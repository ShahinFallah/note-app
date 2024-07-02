import { FormEvent, useRef, useState } from "react"
import ReactSelectCreatable from "react-select/creatable"
import { NoteData, Tag } from "../App"
import { v4 as uuIdv4 } from 'uuid'
import { useNavigate } from "react-router-dom"

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (data: Tag) => void
}

export default function NoteForm({ onSubmit, onAddTag }: NoteFormProps) {
    const navigate = useNavigate()
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
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
                        onCreateOption={label => {
                            const newValue = { label: label, id: uuIdv4() }
                            setSelectedTags(prevTags => [...prevTags, newValue])
                            onAddTag(newValue)

                        }}
                        options={[
                        ]}
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
                    ref={markdownRef}
                    required
                    placeholder="Enter your body..."
                    rows={20}
                    className="bg-transparent border border-bg-200 rounded-lg focus:outline-none p-2" />
            </div>
            <div className="flex justify-end space-x-2 mt-2">
                <button className="bg-primary-100 rounded-md px-2">Save</button>
                <button type="button" className="border border-bg-200 px-2 p-0.5 rounded-md">Cancel</button>
            </div>
        </form>
    )
}