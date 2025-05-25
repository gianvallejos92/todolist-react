import { useState } from "react";
import HeadOfList from "./HeadOfList";
import ListOfTasks from './ListOfTasks';

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [taskName, setTaskName] = useState("");

    const handleTaskNameEvent = (event) => {
      setTaskName(event.target.value);
    }

    const addTask = () => {
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
            <HeadOfList 
              title="To do List"
              taskName={taskName}
              handleTaskNameEventInParent={handleTaskNameEvent}
              addTaskInParent={addTask}
            />
            <ListOfTasks
              items = {items}
              handleCheckboxChangeInGrandPa={handleCheckboxChange}
              deleteTaskInGrandPa={deleteTask}
            />
       </>
    )
}

export default TodoList;
