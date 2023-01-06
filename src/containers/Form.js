import React from 'react';

const Form = (props) => {
    return (
    <div className='grocery'>
        <h1> Add an Item.</h1>
        <form onSubmit={props.onSubmit} className='form'>
            <label htmlFor="item">Item: </label>
            <input type='text' id='item' name='item' /> <br />

            <label htmlFor="brand">Brand:</label>
            <input type='text' id='brand' name='brand' /> <br />

            <label htmlFor="units">Units:</label>
            <input type='text' id='units' name='units' /> <br />

            <label htmlFor="quantity">Quantity: </label>
            <input type='number' id='quantity' name='quantity' /> <br />

            <label htmlFor='isPurchased'>Purchased?</label>
            <input type='checkbox' id='isPurchased' name='isPurchased' value='true'/>
            

            <input type='submit' />
        </form>
    </div>
    );
}

export default Form;