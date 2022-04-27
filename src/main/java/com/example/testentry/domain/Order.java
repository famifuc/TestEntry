package com.example.testentry.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "[order]")
public class Order implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    @Column(name = "orderid", nullable = false)
    private Long orderID;

    @Column(name = "customerid")
    private Long customerID;

    @Column(name = "customername")
    private String customerName;

    @Column(name = "productid")
    private Long productID;

    @Column(name = "amount")
    private float amount;

    @Column(name = "orderdate")
    private LocalDateTime orderDate;

    public Long getOrderID() {
        return orderID;
    }

    public void setOrderID(Long orderID) {
        this.orderID = orderID;
    }

    public Long getCustomerID() {
        return customerID;
    }

    public void setCustomerID(Long customerID) {
        this.customerID = customerID;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Long getProductID() {
        return productID;
    }

    public void setProductID(Long productID) {
        this.productID = productID;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }
}
