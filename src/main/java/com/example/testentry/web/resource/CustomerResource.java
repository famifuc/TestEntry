package com.example.testentry.web.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.testentry.domain.*;
import com.example.testentry.service.CustomerService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@Controller
@RequestMapping("/api")
public class CustomerResource {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "/customer", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> creatCustomer(HttpServletRequest request, @Valid @RequestBody Customer customer) throws URISyntaxException {
        if(customer.getCustomerID() != null){
            return null;
        }
        Customer customer1 = customerService.save(customer);
        return ResponseEntity.created(new URI("/api/customer" + customer1.getCustomerID())).body(customer1);
    }

    @RequestMapping(value = "/customer/update", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> updateCustomer(HttpServletRequest request, @Valid @RequestBody Customer customer) throws URISyntaxException {
        if(customer.getCustomerID() == null){
            return creatCustomer(request, customer);
        }
        Customer customer1 = customerService.save(customer);

        return ResponseEntity.ok().body(customer1);
    }

    @RequestMapping(value = "/customer/{customerID}", method = RequestMethod.GET)
    public ResponseEntity<Customer> findOneCustomer (@PathVariable("customerID") Long customerID){
        Optional<Customer> customer = customerService.findOne(customerID);
        if (customer.isPresent()) {
            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/customers", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Customer>> findAllCustomer (HttpServletRequest request){
        Iterable<Customer> customer = customerService.findAll();
        return ResponseEntity.ok().body(customer);
    }

    @RequestMapping(value = "/customer/{customerID}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteCustomer (@PathVariable("customerID") Long customerID) {

        if(customerID != null){
            customerService.delete(customerID);
        }
        return ResponseEntity.ok().build();
    }


}
