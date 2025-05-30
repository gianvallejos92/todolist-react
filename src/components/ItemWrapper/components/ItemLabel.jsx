const ItemLabel = ({text, checkedState}) => {
    return (
        <div className="w-64 text-left mx-4">
            <span style={{ textDecoration: checkedState === false ? "none" : "line-through" }}>
                { text }
            </span>
        </div>
    )
}

export default ItemLabel;
