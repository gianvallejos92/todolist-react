import { useContext } from "react";
import { GeneralContext } from '../../../context/generalContext';

import TrashIcon from "../../Icons/TrashIcon";

const ItemBtn = ({id}) => {
    const { dispatch } = useContext(GeneralContext);

    const handleDeleteTask = (id) => {
      dispatch({
        type: 'REMOVE_TASK',
        value: id
      });
    }
    
    return (
        <a 
            onClick={() => handleDeleteTask(id)}
            className="cursor-pointer text-gray-500 hover:text-gray-500"
        >
            <TrashIcon/>
        </a>
    )
}

export default ItemBtn;
