function NoteCart() {
    return (
        <div className="bg-gradient-to-b from-bg-200 to-accent-200 rounded-lg p-0.5 cursor-pointer hover:-translate-y-1 transition-transform">
            <div className="flex flex-col bg-bg-200 rounded-lg p-10 text-text-200">
                <h1 className="text-3xl">Title</h1>
                <div className="flex mt-5 gap-2 w-2/3 flex-wrap">
                    <span className="text-sm text-white p-1 bg-primary-100 rounded-xl truncate max-w-20">#book</span>
                    <span className="text-sm text-white p-1 bg-primary-100 rounded-xl truncate max-w-20">#harry potter</span>
                </div>
            </div>
        </div>
    )
}

export default NoteCart