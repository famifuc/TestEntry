import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customerID: '',
            customerName: '',
            productID: '',
            amount: '',
            orderDate: ''
        }
        this.changeCustomerIDHandler = this.changeCustomerIDHandler.bind(this);
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeProductIDHandler = this.changeProductIDHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changeOrderDateHandler = this.changeOrderDateHandler.bind(this);
        this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            OrderService.getOrderById(this.state.id).then( (res) =>{
                let order = res.data;
                this.setState({
                    customerID: order.customerID,
                    customerName : order.customerName,
                    productID : order.productID,
                    amount : order.amount,
                    orderDate : order.orderDate
                });
            });
        }        
    }
    saveOrUpdateOrder = (e) => {
        e.preventDefault();
        let order = {customerID: this.state.customerID, customerName: this.state.customerName, productID: this.state.productID, amount: this.state.amount, orderDate: this.state.orderDate};
        console.log('order => ' + JSON.stringify(order));

        if(this.state.id === '_add'){
            OrderService.createOrder(order).then(res =>{
                this.props.history.push('/orders');
            });
        }else{
            OrderService.updateOrder(order, this.state.id).then( res => {
                this.props.history.push('/orders');
            });
        }
    }
    
    changeCustomerIDHandler= (event) => {
        this.setState({customerID: event.target.value});
    }

    changeCustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changeProductIDHandler= (event) => {
        this.setState({productID: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changeOrderDateHandler= (event) => {
        this.setState({orderDate: event.target.value});
    }


    cancel(){
        this.props.history.push('/orders');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Order</h3>
        }else{
            return <h3 className="text-center">Update Order</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer ID: </label>
                                            <input placeholder="CustomerID" name="customerID" className="form-control" 
                                                value={this.state.customerID} onChange={this.changeCustomerIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="CustomerName" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product ID: </label>
                                            <input placeholder="ProductID" name="productID" className="form-control" 
                                                value={this.state.productID} onChange={this.changeProductIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount: </label>
                                            <input placeholder="Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input type="date" id="birthday" name="orderDate" 
                                                value={this.state.orderDate} onChange={this.changeOrderDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateOrder}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateOrderComponent