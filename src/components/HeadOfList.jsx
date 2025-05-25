
const HeadOfList = (props) => {
    
    const {
        title,
        taskName, 
        handleTaskNameEventInParent, 
        addTaskInParent
    } = {...props};

    const ADD_TASK_BUTTON = "Add Task";

    return (
        <div id="head-of-lists">
            <h1 className="font-bold">{title}</h1>
            <div className="my-5">
                <input 
                    className="w-64 border border-gray-300 rounded px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    type="text" 
                    value={taskName}
                    onChange={handleTaskNameEventInParent}
                    placeholder="Insert Task" />
                <button onClick={addTaskInParent} >
                    { ADD_TASK_BUTTON }
                </button>
            </div>
        </div>    
    )
}

export default HeadOfList;