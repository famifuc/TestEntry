import React, { Component } from 'react'
import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
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
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product ID</th>
                                    <th> Product Price</th>
                                    <th> Product Type</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.id}>
                                             <td> {product.productID}</td>
                                             <td> { product.productPrice} </td>   
                                             <td> {product.productType}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
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

export default ListProductComponent