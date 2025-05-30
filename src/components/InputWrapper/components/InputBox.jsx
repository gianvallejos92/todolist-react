import { useContext } from "react";
import { GeneralContext } from '../../../context/generalContext'

const InputBox = () => {
    const { state, dispatch } = useContext(GeneralContext);

    const handleChange = (event) => {
        dispatch({
            type: 'ONCHANGE_TASK_NAME',
            value: event.target.value
        })
    }

    return (
        <input 
            className="w-64 border border-gray-300 rounded px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
            type="text" 
            value={state.taskName}
            onChange={handleChange}
            placeholder="Insert Task" 
        />
    )
}

export default InputBox;
