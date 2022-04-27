package com.example.testentry.web.resource;

import com.example.testentry.domain.Order;
import com.example.testentry.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api")
public class OrderResource {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/order", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Order> creatOrder(HttpServletRequest request, @Valid @RequestBody Order order) throws URISyntaxException {
        if(order.getOrderID() != null){
            return null;
        }
        Order order1 = orderService.save(order);
        return ResponseEntity.created(new URI("/api/order" + order1.getProductID())).body(order1);
    }

    @RequestMapping(value = "/order/update", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Order> updateOrder(HttpServletRequest request, @Valid @RequestBody Order order) throws URISyntaxException {
        if(order.getOrderID() == null){
            return creatOrder(request, order);
        }
        Order order1 = orderService.save(order);

        return ResponseEntity.ok().body(order1);
    }

    @RequestMapping(value = "/order/{orderID}", method = RequestMethod.GET)
    public ResponseEntity<Order> findOneOrder (@PathVariable("orderID") Long orderID){
        Optional<Order> order = orderService.findOne(orderID);
        if (order.isPresent()) {
            return new ResponseEntity<>(order.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/order/V2/{customerID}", method = RequestMethod.GET)
    public ResponseEntity<List<Order>> findOrderByCustomerID (@PathVariable("customerID") Long customerID){
        List<Order> order = orderService.findAllByCustomerID(customerID);
        return ResponseEntity.ok().body(order);
    }

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Order>> findAllOrder (HttpServletRequest request){
        Iterable<Order> order = orderService.findAll();
        return ResponseEntity.ok().body(order);
    }

    @RequestMapping(value = "/order/{orderID}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteOrder (@PathVariable("orderID") Long orderID) {

        if(orderID != null){
            orderService.delete(orderID);
        }
        return ResponseEntity.ok().build();
    }
}
