import { useState } from "react";
import TrashIcon from "./Icons/TrashIcon";

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [taskName, setTaskName] = useState("");

    const handleTaskNameEvent = (event) => {
      setTaskName(event.target.value);
    }

    const handleClick = () => {
      const newItem = {
        id: (items) ? items.length + 1 : 0,
        text: taskName,
        state: false
      }
      setItems(items => [...items, newItem]);
      setTaskName("");
    }

    const handleCheckboxChange = (event, itemId) => {
      setItems(prevItems => 
        prevItems.map(item => item.id === itemId ? {...item, state: event.target.checked } : item)
      );
    }

    const deleteTask = (index) => {
      setItems(() => items.filter(item => item.id !== index))
    }

    return (
        <>
            <div id="head-of-lists">
                <h1 className="font-bold underline">To do List </h1>
                <div className="my-5">
                    <input 
                        className="w-64 border border-gray-300 rounded px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        type="text" 
                        value={taskName}
                        onChange={handleTaskNameEvent}
                        placeholder="Insert Task" />
                    <button onClick={handleClick} >
                        Add Task
                    </button>
                </div>
            </div>
            <div id="list-of-tasks">
            {
              (items.length !== 0) ?
              (
                  items.map (item => (
                    <div 
                      className="flex h-10 justify-between items-center"
                      key={item.id}
                    >
                      <input 
                          className="w-6 h-6"
                          type="checkbox" 
                          name={`task-${item.id}`}
                          id={`task-${item.id}`} 
                          checked={item.state}
                          onChange={(event) => handleCheckboxChange(event, item.id)}
                      />

                      <div className="w-64 text-left mx-4">
                          <span style={{ textDecoration: item.state === false ? "none" : "line-through" }}>
                              { item.text }
                          </span>
                      </div>
                      
                      <a 
                          onClick={() => deleteTask(item.id)}
                          className="cursor-pointer text-gray-500 hover:text-gray-500"
                      >
                          <TrashIcon/>
                      </a>
                  </div>
                  ))
              ) : "Empty list of items"       
            }
        </div>
       </>
    )
}

export default TodoList;
