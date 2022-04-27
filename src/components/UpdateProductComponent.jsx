import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productPrice: '',
            productType: ''
        }
        this.changeProductPriceHandler = this.changeProductPriceHandler.bind(this);
        this.changeProductTypeHandler = this.changeProductTypeHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({
                productPrice: product.productPrice,
                productType : product.productType
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {productPrice: this.state.productPrice, productType: this.state.productType};
        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductService.updateProduct(product, this.state.id).then( res => {
            this.props.history.push('/products');
        });
    }
    
    changeProductPriceHandler= (event) => {
        this.setState({productPrice: event.target.value});
    }

    changeProductTypeHandler= (event) => {
        this.setState({productType: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Price" name="productPrice" className="form-control" 
                                                value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Type: </label>
                                            <input placeholder="Type" name="productType" className="form-control" 
                                                value={this.state.productType} onChange={this.changeProductTypeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
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

export default UpdateProductComponent