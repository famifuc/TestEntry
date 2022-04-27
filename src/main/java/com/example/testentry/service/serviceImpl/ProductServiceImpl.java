package com.example.testentry.service.serviceImpl;

import java.util.Optional;

import com.example.testentry.domain.*;
import com.example.testentry.repository.ProductRepository;
import com.example.testentry.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product save(Product product) {
        productRepository.save(product);
        return product;
    }

    @Override
    public void delete(long productID) {
        productRepository.deleteById(productID);
    }

    @Override
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findOne(long productID) {
        return productRepository.findById(productID);
    }

}
