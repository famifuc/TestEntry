package com.example.testentry.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.testentry.domain.*;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
