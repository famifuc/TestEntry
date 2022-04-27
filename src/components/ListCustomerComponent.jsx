import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then( res => {
            this.setState({customers: this.state.customers.filter(customer => customer.id !== id)});
        });
    }
    editCustomer(id){
        this.props.history.push(`/add-customer/${id}`);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer/_add');
    }

    render() {
        return (
            <div>
                 
                 <nav class="navbar navbar-expand-xl bg-dark navbar-dark justify-content-center">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:3000/products/">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:3000/customers/">Customer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:3000/orders/">Order</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:3000/stocks/">Stock</a>
                        </li>
                    </ul>
                </nav>
                <br></br>
                 <div className = "container">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                 </div>
                 <br></br>
                 <div className = "container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Customer ID</th>
                                    <th> Customer Name</th>
                                    <th> Address </th>
                                    <th> Phone</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.id}>
                                             <td> {customer.customerID}</td>
                                             <td> {customer.customerName} </td>   
                                             <td> {customer.address}</td>
                                             <td> {'0'+customer.phone}</td>
                                             <td>
                                                 <button onClick={ () => this.editCustomer(customer.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCustomerComponent