package com.example.testentry.service.serviceImpl;

import com.example.testentry.domain.Stock;
import com.example.testentry.repository.StockRepository;
import com.example.testentry.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public Stock save(Stock stock) {
        stockRepository.save(stock);
        return stock;
    }

    @Override
    public void delete(long productID) {
        stockRepository.deleteById(productID);
    }

    @Override
    public Iterable<Stock> findAll() {
        return stockRepository.findAll();
    }

    @Override
    public Optional<Stock> findOne(long productID) {
        return stockRepository.findById(productID);
    }

}
