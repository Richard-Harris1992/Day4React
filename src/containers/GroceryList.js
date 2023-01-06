function GroceryList(props) {

    const list = props.items.map(items => {
        return (
            <li>
                <h2>{items.item}</h2>
                <ul>
                    <li> Brand: {items.brand}</li>
                    <li> Units: {items.units}</li>
                    <li> Quantity: {items.quantity}</li>
                </ul>
            </li>
            );
        });
    

    return (
    <div className="grocery">
        <h1>Grocery List</h1>
        <ol>
            {list}
        </ol>
    </div>
    );
};


export default GroceryList;