import React, { Component } from 'react'
import StockService from '../services/StockService';

class UpdateStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            quality: '',
            shopNo: ''
        }
        this.changeQualityHandler = this.changeQualityHandler.bind(this);
        this.changeShopNoHandler = this.changeShopNoHandler.bind(this);
        this.updateStock = this.updateStock.bind(this);
    }

    componentDidMount(){
        StockService.getStockById(this.state.id).then( (res) =>{
            let stock = res.data;
            this.setState({
                quality: stock.quality,
                shopNo : stock.shopNo
            });
        });
    }

    updateStock = (e) => {
        e.preventDefault();
        let stock = {quality: this.state.quality, shopNo: this.state.shopNo};
        console.log('stock => ' + JSON.stringify(stock));
        console.log('id => ' + JSON.stringify(this.state.id));
        StockService.updateStock(stock, this.state.id).then( res => {
            this.props.history.push('/stocks');
        });
    }
    
    changeQualityHandler= (event) => {
        this.setState({quality: event.target.value});
    }

    changeShopNoHandler= (event) => {
        this.setState({shopNo: event.target.value});
    }

    cancel(){
        this.props.history.push('/stocks');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Stock</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Product ID: </label>
                                            <input placeholder="ProductID" name="productID" className="form-control" 
                                                value={this.state.productID}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quality: </label>
                                            <input placeholder="Quality" name="quality" className="form-control" 
                                                value={this.state.quality} onChange={this.changeQualityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Shop No: </label>
                                            <input placeholder="Shop No" name="shopNo" className="form-control" 
                                                value={this.state.shopNo} onChange={this.changeShopNoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStock}>Save</button>
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

export default UpdateStockComponent