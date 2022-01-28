import { Component } from "react";

export default class CustomersList extends Component {
    state = {
        appTitle: 'Customers',
        customersCount: 5,
        customers: [
            { id: 1, name: 'Joc', phoneNumber: 1221, photo: 'https://picsum.photos/id/1010/30' },
            { id: 3, name: 'jock', phoneNumber: 1223, photo: 'https://picsum.photos/id/1012/30' },
            { id: 2, name: 'John', phoneNumber: 1222, photo: 'https://picsum.photos/id/1001/30' },
            { id: 4, name: 'wick', phoneNumber: 1224, photo: 'https://picsum.photos/id/1013/30' },
            { id: 5, name: 'Jod', phoneNumber: 0, photo: 'https://picsum.photos/id/1014/30' }

        ]
    };
    onRefreshClick = () => {
        this.setState({
            customersCount: 0
        })
    }

    getPhoneNumber = (phoneNumber) => phoneNumber ? phoneNumber : 'No Phone';

    getCustomerRow = () => {
        return this.state.customers.map((customer, index) => {
            return (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>
                        <img src={customer.photo} alt="" />
                        <div>
                            <button className="btn btn-secondary" onClick={() => { this.onChangePicture(customer, index); }}>Change Picture</button>
                        </div>
                    </td>
                    <td>{customer.name}</td>
                    <td>{this.getPhoneNumber(customer.phoneNumber)}</td>
                </tr>
            )
        })

    }

    onChangePicture = (customer, index) => {
        
        let customersArr = this.state.customers;
        customersArr[index].photo = 'https://picsum.photos/id/104/30'
        this.setState({
            customers: customersArr
        })
    }

    render() {
        return <div>
            <h1 className="border-bottom m-1 p-1">{this.state.appTitle}</h1>
            <span>{this.state.customersCount}</span>
            <button className="btn btn-primary" onClick={this.onRefreshClick}>Refresh</button>
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            Photo
                        </td>
                        <td>
                            Customer Name
                        </td>
                        <td>
                            Phone Number
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}
                </tbody>
            </table>
        </div>
    }
};
