import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class ListOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                orders: []
        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.addOrder.bind(this);
        this.deleteOrder = this.addOrder.bind(this);
    }

    deleteOrder(id){
        OrderService.deleteOrder(id).then( res => {
            this.setState({orders: this.state.orders.filter(order => order.id !== id)});
        });
    }
    editOrder(id){
        this.props.history.push(`/add-order/${id}`);
    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({ orders: res.data});
        });
    }

    addOrder(){
        this.props.history.push('/add-order/_add');
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
                    <button className="btn btn-primary" onClick={this.addOrder}> Add Order</button>
                 </div>
                 <br></br>
                 <div className = "container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Order ID</th>
                                    <th> Customer ID</th>
                                    <th> Customer Name</th>
                                    <th> Product ID</th>
                                    <th> Amount</th>
                                    <th> Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.id}>
                                             <td> {order.orderID}</td>
                                             <td> { order.customerID} </td>   
                                             <td> {order.customerName}</td>
                                             <td> {order.productID}</td>
                                             <td> { order.amount} </td>   
                                             <td> {order.orderDate}</td>
                                             <td>
                                                 <button onClick={ () => this.editOrder(order.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrder(order.id)} className="btn btn-danger">Delete </button>
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

export default ListOrderComponent