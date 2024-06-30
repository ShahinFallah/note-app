import NoteCart from "../components/NoteCart"

function NoteList() {
  return (
    <div className="flex flex-col">
        <div className="flex justify-between items-center text-white border-b border-bg-300 pb-3 mb-3">
            <h1 className="text-2xl">Note App</h1>
            <div className="space-x-2">
                <button className="bg-primary-100 p-1 px-2 rounded-md hover:-translate-x-1 transition">Create</button>
                <button className="border border-bg-300 text-text-200 p-1 px-1.5 rounded-md hover:rounded-md">Edit Tags</button>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
            <NoteCart />
            <NoteCart />
            <NoteCart />
        </div>
    </div>
  )
}

export default NoteList