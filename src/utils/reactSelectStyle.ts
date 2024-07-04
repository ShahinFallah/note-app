import { GroupBase, OptionProps } from "react-select"

const reactSelectStyle = {
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
    option: (state: OptionProps<{
        label: string;
        value: string;
    }, true, GroupBase<{
        label: string;
        value: string;
    }>>) => {
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

export default reactSelectStyle