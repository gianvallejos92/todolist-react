import { ADD_TASK, REMOVE_TASK, ONCHANGE_TASK_NAME, ONCHANGE_CHECKBOX} from '../actions/types'

const generalReducer = (state, action) => {
    switch (action.type) {
        case ONCHANGE_TASK_NAME: 
            return {
                ...state,
                taskName: action.value,
            }
        case ADD_TASK:
            if (state.taskName) {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {
                            id: (state.items) ? state.items.length + 1 : 0,
                            text: state.taskName,
                            checkedState: false
                        }
                    ],
                    taskName: ""
                }
            } else {
                return state;
            }
        case REMOVE_TASK:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.value)
            }
        case ONCHANGE_CHECKBOX:
            return {
                ...state,
                items: state.items.map(item => item.id === action.itemId ? {...item, checkedState: action.event.target.checked } : item)
            }
        default:
            return state;
    }
}

export default generalReducer;
