package com.example.testentry.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.testentry.domain.*;

public interface CustomerRepository extends CrudRepository<Customer, Long>{

    /*@Query(value = "delete customer where customerid = ?1", nativeQuery = true)
    void deleteCustomerByID(Long customerID);*/

    List<Customer> findAllByCustomerNameContaining(String customerName);
}
