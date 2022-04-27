package com.example.testentry.service.serviceImpl;

import com.example.testentry.domain.Order;
import com.example.testentry.repository.OrderRepository;
import com.example.testentry.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order save(Order order) {
        if (order.getAmount() > 0 && order.getOrderDate().isAfter(LocalDateTime.now())){
            orderRepository.save(order);
        }
        return order;
    }

    @Override
    public void delete(long orderID) {
        orderRepository.deleteById(orderID);
    }

    @Override
    public Iterable<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> findOne(long orderID) {
        return orderRepository.findById(orderID);
    }

    @Override
    public List<Order> findAllByCustomerID(Long customerID) {
        return orderRepository.findAllByCustomerID(customerID);
    }
}
