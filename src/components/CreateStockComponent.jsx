import React, { Component } from 'react'
import StockService from '../services/StockService';

class CreateStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productID: '',
            quality: '',
            shopNo: ''
        }
        this.changeProductIDHandler = this.changeProductIDHandler.bind(this);
        this.changeQualityHandler = this.changeQualityHandler.bind(this);
        this.changeShopNoHandler = this.changeShopNoHandler.bind(this);
        this.saveOrUpdateStock = this.saveOrUpdateStock.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            StockService.getStockById(this.state.id).then( (res) =>{
                let stock = res.data;
                this.setState({
                    productID: stock.productID,
                    quality : stock.quality,
                    shopNo : stock.shopNo
                });
            });
        }        
    }
    saveOrUpdateStock = (e) => {
        e.preventDefault();
        let stock = {productID: this.state.productID, quality: this.state.quality, shopNo: this.state.shopNo};
        console.log('stock => ' + JSON.stringify(stock));

        if(this.state.id === '_add'){
            StockService.createStock(stock).then(res =>{
                this.props.history.push('/stocks');
            });
        }else{
            StockService.updateStock(stock, this.state.id).then( res => {
                this.props.history.push('/stocks');
            });
        }
    }
    
    changeProductIDHandler= (event) => {
        this.setState({productID: event.target.value});
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Stock</h3>
        }else{
            return <h3 className="text-center">Update Stock</h3>
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
                                            <label> Product ID: </label>
                                            <input placeholder="ProductID" name="productID" className="form-control" 
                                                value={this.state.productID} onChange={this.changeProductIDHandler}/>
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStock}>Save</button>
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

export default CreateStockComponent