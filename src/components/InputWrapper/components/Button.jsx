import { useContext } from "react";
import { GeneralContext } from '../../../context/generalContext'

const Button = ({label, cType}) => {
    const { dispatch } = useContext(GeneralContext);
    
    const handleOnClick = () => {
        dispatch({
            type: cType
        })
    }

    return (
        <button onClick={handleOnClick} >
            { label }
        </button>
    )
}

export default Button;
