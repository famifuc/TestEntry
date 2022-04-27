package com.example.testentry.service;

import com.example.testentry.domain.*;
import java.util.List;
import java.util.Optional;

public interface CustomerService {

    Customer save (Customer customer);

    void delete (long customerID);

    Iterable<Customer> findAll();

    Optional<Customer> findOne (long customerID);
}
