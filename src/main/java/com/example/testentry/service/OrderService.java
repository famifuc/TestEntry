package com.example.testentry.service;

import com.example.testentry.domain.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    Order save (Order order);

    void delete (long orderID);

    Iterable<Order> findAll();

    Optional<Order> findOne (long orderID);

    List<Order> findAllByCustomerID(Long customerID);
}
