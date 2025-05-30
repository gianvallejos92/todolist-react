import InputWrapper from "./InputWrapper/InputWrapper";
import ListOfTasks from './ListOfTasks';

const TodoList = () => {
    return (
        <>
            <InputWrapper title="To do List" />
            <ListOfTasks />
       </>
    )
}

export default TodoList;
