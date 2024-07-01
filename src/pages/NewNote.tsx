import NoteForm from "../components/NoteForm"



function NewNote() {

    return (
        <div className="text-white">
            <div className="border-b border-bg-300 pb-3 mb-5">
                <h1 className="text-2xl">New Note</h1>
            </div>
            <NoteForm />
        </div>
    )
}

export default NewNote