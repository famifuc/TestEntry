package com.example.testentry.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "stock")
public class Stock implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "productid", nullable = false)
    private Long productID;

    @Column(name = "quality")
    private Long quality;

    @Column(name = "shopno")
    private Integer shopNo;

    public Long getProductID() {
        return productID;
    }

    public void setProductID(Long productID) {
        this.productID = productID;
    }

    public Long getQuality() {
        return quality;
    }

    public void setQuality(Long quality) {
        this.quality = quality;
    }

    public Integer getShopNo() {
        return shopNo;
    }

    public void setShopNo(Integer shopNo) {
        this.shopNo = shopNo;
    }
}
