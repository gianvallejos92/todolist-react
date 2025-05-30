import Button from './components/Button';
import InputBox from "./components/InputBox";

const InputWrapper = ({title}) => {

    return (
        <div id="head-of-lists">
            <h1 className="font-bold">{title}</h1>
            <div className="my-5">
                <InputBox />
                <Button label="Add Task" cType='ADD_TASK' />                
            </div>
        </div>    
    )
}

export default InputWrapper;