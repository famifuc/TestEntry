import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customerName: '',
            address: '',
            phone: ''
        }
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( (res) =>{
            let customer = res.data;
            this.setState({
                customerName: customer.customerName,
                address : customer.address,
                phone: customer.phone
            });
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        let customer = {customerName: this.state.customerName, address: this.state.address, phone: this.state.phone};
        console.log('customer => ' + JSON.stringify(customer));
        console.log('id => ' + JSON.stringify(this.state.id));
        CustomerService.updateCustomer(customer, this.state.id).then( res => {
            this.props.history.push('/customers');
        });
    }
    
    changeCustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }

    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Customer</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="Name" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCustomer}>Save</button>
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

export default UpdateCustomerComponent