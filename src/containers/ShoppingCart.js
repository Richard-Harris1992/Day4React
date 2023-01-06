function ShoppingCart(props) {
    props.items.forEach(i => console.log(i));
    const filter = props.items.filter(item => item.isPurchased == 'true')
    filter.forEach(e=>console.log(e))
    const list = filter.map(item => {
        return (<h3>{item.item}</h3>);
    })

    return(
        <div className="grocery">
        <h1>Shopping Cart</h1>
        {list}
        </div>
    );
}

export default ShoppingCart;