import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8080/api/orders";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }

    createOrder(order){
        return axios.post(ORDER_API_BASE_URL, order);
    }

    getOrderById(orderId){
        return axios.get(ORDER_API_BASE_URL + '/' + orderId);
    }

    getOrderByCustomerID(customerID){
        return axios.get(ORDER_API_BASE_URL + '/V2/' + customerID)
    }

    updateOrder(order){
        return axios.put(ORDER_API_BASE_URL , order);
    }

    deleteOrder(orderId){
        return axios.delete(ORDER_API_BASE_URL + '/' + orderId);
    }
}

export default new OrderService()