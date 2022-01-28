import { Component } from "react";

export default class ShoppingCart extends Component {

    state = {
        products: [{
            id: 1, productName: 'Apple', price: 222, quantity: 2
        },
        {
            id: 2, productName: 'oppo', price: 222, quantity: 2
        }, {
            id: 1, productName: 'one plus', price: 222, quantity: 2
        }, {
            id: 1, productName: 'Nokia', price: 222, quantity: 2
        }, {
            id: 1, productName: 'Honor', price: 222, quantity: 2
        }]
    }
    render() {
        return <div>
            <h4>Shopping Cart</h4>
            <div>
                {this.state.products.map((prod) => {
                   return <div>{prod.productName}</div>
                })}
            </div>
        </div>
    }
}