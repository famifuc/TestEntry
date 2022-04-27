package com.example.testentry.domain;

import lombok.NonNull;

import javax.persistence.*;
import java.io.Serializable;
import javax.validation.constraints.NotNull;

/**
 * A Customer.
 */
@Entity
@Table(name = "customer")
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    @Column(name = "customerid", nullable = false)
    private Long customerID;

    @NotNull
    @Column(name = "customername", nullable = false)
    private String customerName;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private Long phone;

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }
}
