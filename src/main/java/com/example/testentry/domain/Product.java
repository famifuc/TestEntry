package com.example.testentry.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "product")
public class Product implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    @Column(name = "productid", nullable = false)
    private Long productID;

    @Column(name = "productprice")
    private float productPrice;

    @Column(name = "producttype")
    private String productType;

    public Long getProductID() {
        return productID;
    }

    public void setProductID(Long productID) {
        this.productID = productID;
    }

    public float getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(float productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }
}
