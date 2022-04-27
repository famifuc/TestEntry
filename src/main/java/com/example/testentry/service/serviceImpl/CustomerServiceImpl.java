package com.example.testentry.service.serviceImpl;

import java.util.Optional;
import com.example.testentry.domain.*;
import com.example.testentry.repository.CustomerRepository;

import com.example.testentry.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer) {
        if(customer.getCustomerName() != null){
            customerRepository.save(customer);
        }
        return customer;
    }

    @Override
    public void delete(long customerID) {
        customerRepository.deleteById(customerID);
    }

    @Override
    public Iterable<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> findOne(long customerID) {
        return customerRepository.findById(customerID);
    }
}
