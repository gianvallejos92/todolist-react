
import { useContext } from "react";
import { GeneralContext } from '../../../context/generalContext';

const ItemCheckbox = ({id, checkedState}) => {

    const { dispatch } = useContext(GeneralContext);

    const handleCheckboxChange = (event, itemId) => {
        dispatch({
            type: 'ONCHANGE_CHECKBOX',
            itemId: itemId,
            event: event
        });
    }

    return (
        <input 
            className="w-6 h-6"
            type="checkbox" 
            name={`task-${id}`}
            id={`task-${id}`} 
            checked={checkedState}
            onChange={(event) => handleCheckboxChange(event, id)}
        />
    )
}

export default ItemCheckbox;
