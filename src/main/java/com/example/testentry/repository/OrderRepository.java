package com.example.testentry.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.example.testentry.domain.*;

public interface OrderRepository extends CrudRepository<Order, Long> {
    List<Order> findAllByCustomerID(Long customerID);
    List<Order> findAllByCustomerNameContaining(String customerName);
}
