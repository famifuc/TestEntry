package com.example.testentry.service;

import com.example.testentry.domain.Stock;

import java.util.Optional;

public interface StockService {

    Stock save(Stock stock);

    void delete(long productID);

    Iterable<Stock> findAll();

    Optional<Stock> findOne(long productID);
}
