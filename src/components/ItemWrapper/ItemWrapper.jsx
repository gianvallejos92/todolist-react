import ItemCheckbox from "./components/ItemCheckbox";
import ItemLabel from "./components/ItemLabel";
import ItemBtn from "./components/ItemBtn";

const ItemWrapper = ({ id, text, checkedState }) => {

    return (
        <div className="flex h-10 justify-between items-center" >
            
            <ItemCheckbox id={id} checkedState={checkedState} />
            
            <ItemLabel text={text} checkedState={checkedState} />

            <ItemBtn id={id}/>

        </div>
    )
}

export default ItemWrapper;
