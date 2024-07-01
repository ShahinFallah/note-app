import ReactSelectCreatable from "react-select/creatable"

export default function NoteForm() {
  return (
    <form className="flex flex-col">
    <div className="flex gap-3 mb-3">
        <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="title" className="text-text-200">Title</label>
            <input
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
                }
            }
                id={'tag'}
                options={[
                    { value: 'test', label: 'test' },
                    { value: 'test1', label: 'test1' },
                    { value: 'test2', label: 'test2' },
                    { value: 'test3', label: 'test3' }
                ]}
            />
        </div>
    </div>
    <div className="flex flex-col gap-1">
        <label htmlFor="markdown">body</label>
        <textarea
            required
            placeholder="Enter your body..."
            rows={20}
            className="bg-transparent border border-bg-200 rounded-lg focus:outline-none p-2" />
    </div>
    <div className="flex justify-end space-x-2 mt-2">
        <button className="bg-primary-100 rounded-md px-2">save</button>
        <button type="button" className="border border-bg-200 px-2 p-0.5 rounded-md">Cancel</button>
    </div>
</form>
  )
}