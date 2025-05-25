
import TrashIcon from "./Icons/TrashIcon";

const ListItem = (props) => {

    const {
        id, 
        text, 
        state, 
        deleteTaskInParent,
        handleCheckBoxInParent
    } = {...props}

    return (
        <div 
            className="flex h-10 justify-between items-center"
            key={id}
        >
            <input 
                className="w-6 h-6"
                type="checkbox" 
                name={`task-${id}`}
                id={`task-${id}`} 
                checked={state}
                onChange={(event) => handleCheckBoxInParent(event, id)}
            />

            <div className="w-64 text-left mx-4">
                <span style={{ textDecoration: state === false ? "none" : "line-through" }}>
                    { text }
                </span>
            </div>
            
            <a 
                onClick={() => deleteTaskInParent(id)}
                className="cursor-pointer text-gray-500 hover:text-gray-500"
            >
                <TrashIcon/>
            </a>
        </div>
    )
}

export default ListItem;
