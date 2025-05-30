import { useContext } from "react";
import { GeneralContext } from '../context/generalContext'

import ItemWrapper from './ItemWrapper/ItemWrapper';

const ListOfTasks = () => {

    const { state } = useContext(GeneralContext);
    
    return (
        <div id="list-of-tasks">
            {
              (state.items.length !== 0) ?
              (
                  state.items.map (item => (
                    <ItemWrapper 
                      {...item} 
                      key={item.id} 
                    />
                  ))
              ) : "Empty list of items"       
            }
        </div>
    )
}

export default ListOfTasks;
