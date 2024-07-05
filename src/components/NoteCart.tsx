import { Link } from "react-router-dom"
import { Tag } from "../App"

type NoteCartProps = {
    title: string
    tags: Tag[]
    id: string
}

function NoteCart({ title, tags, id }: NoteCartProps) {
    return (
        <div className="bg-gradient-to-b from-bg-200 to-accent-200 rounded-lg p-0.5 cursor-pointer hover:-translate-y-1 transition-transform">
            <Link to={id}>
                <div className="flex flex-col items-center justify-center bg-bg-200 rounded-lg p-7 sm:p-10 h-full text-text-200 flex-wrap sm:items-start">
                    <h1 className="text-3xl w-full break-words text-center sm:text-left">{title}</h1>
                    {tags.length > 0 && (
                        <div className="flex justify-center sm:justify-start mt-5 gap-1 w-2/3 flex-wrap">
                            {tags.map(tag => (
                                <span key={tag.id} className="text-sm text-white p-1 bg-primary-100 rounded-lg truncate max-w-20">#{tag.label}</span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    )
}

export default NoteCart