
const HeadOfList = () => {
    return (
        <div id="head-of-lists">
            <h1 className="font-bold underline">To do List </h1>
            <div className="my-5">
                <input 
                    className="w-64 border border-gray-300 rounded px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    type="text" 
                    placeholder="Insert Task" />

                <button>
                    Add Task
                </button>
            </div>
        </div>    
    )
}

export default HeadOfList;