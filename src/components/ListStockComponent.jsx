import React, { Component } from 'react'
import StockService from '../services/StockService';

class ListStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stocks: []
        }
        this.addStock = this.addStock.bind(this);
        this.editStock = this.editStock.bind(this);
        this.deleteStock = this.deleteStock.bind(this);
    }

    deleteStock(id){
        StockService.deleteStock(id).then( res => {
            this.setState({stocks: this.state.stocks.filter(stock => stock.id !== id)});
        });
    }
    editStock(id){
        this.props.history.push(`/add-stock/${id}`);
    }

    componentDidMount(){
        StockService.getStocks().then((res) => {
            this.setState({ stocks: res.data});
        });
    }

    addStock(){
        this.props.history.push('/add-stock/_add');
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
                    <button className="btn btn-primary" onClick={this.addStock}> Add Stock</button>
                 </div>
                 <br></br>
                 <div className = "container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product ID</th>
                                    <th> Quality</th>
                                    <th> Shop No</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stocks.map(
                                        stock => 
                                        <tr key = {stock.id}>
                                             <td> {stock.productID}</td>
                                             <td> { stock.quality} </td>   
                                             <td> {stock.shopNo}</td>
                                             <td>
                                                 <button onClick={ () => this.editStock(stock.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStock(stock.id)} className="btn btn-danger">Delete </button>
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

export default ListStockComponent