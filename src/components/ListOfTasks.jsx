import ListItem from './ListItem';

const ListOfTasks = (props) => {
    const {
        items, 
        handleCheckboxChangeInGrandPa, 
        deleteTaskInGrandPa
    } = {...props}
    
    return (
        <div id="list-of-tasks">
            {
              (items.length !== 0) ?
              (
                  items.map (item => (
                    <ListItem 
                      {...item} 
                      key={item.id} 
                      deleteTaskInParent={deleteTaskInGrandPa}
                      handleCheckBoxInParent={handleCheckboxChangeInGrandPa}
                    />
                  ))
              ) : "Empty list of items"       
            }
        </div>
    )
}

export default ListOfTasks;
