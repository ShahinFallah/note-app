import { IoCloseOutline } from "react-icons/io5";
import { Tag } from "../App";

type EditTagsProps = {
    availableTags: Tag[]
    onDeleteTag: (id: string) => void
    onEditTag: (id: string, label: string) => void
    setShowTagsModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function EditTagsModal({ availableTags, onEditTag, onDeleteTag, setShowTagsModal }: EditTagsProps) {
    
    return (
        <div className="fixed bg-black inset-0 bg-opacity-20 flex flex-col justify-center items-center">
            <div className="bg-bg-200 border border-accent-200 rounded-lg text-text-200 w-96 p-4">
                <div className="flex justify-between items-center border-b border-bg-300 pb-2 mb-4">
                    <h1 className="text-2xl font-semibold">Edit Tags</h1>
                    <IoCloseOutline onClick={() => setShowTagsModal(false)} cursor='pointer' size='30' />
                </div>
                <div className='flex flex-col gap-3 max-h-96 overflow-x-auto'>
                    {availableTags.map(tag => (
                        <div className="flex items-center">
                            <input
                                onChange={e => onEditTag(tag.id, e.target.value)}
                                type="text"
                                className="grow bg-transparent rounded border border-bg-300 p-1 focus:outline-none focus:border-accent-200"
                                defaultValue={tag.label}
                            />
                            <IoCloseOutline
                                onClick={() => onDeleteTag(tag.id)}
                                className="hover:text-red-300"
                                cursor='pointer'
                                size='25'
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-5">
                    <button onClick={() => setShowTagsModal(false)} className="rounded-lg bg-primary-100 p-0.5 px-2">Close</button>
                </div>
            </div>
        </div>
    )
}
