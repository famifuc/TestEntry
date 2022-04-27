package com.example.testentry.service;

import com.example.testentry.domain.*;
import java.util.Optional;

public interface ProductService {

    Product save (Product product);

    void delete (long productID);

    Iterable<Product> findAll();

    Optional<Product> findOne (long productID);
}
