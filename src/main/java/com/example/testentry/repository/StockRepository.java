package com.example.testentry.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.example.testentry.domain.*;

public interface StockRepository extends CrudRepository<Stock, Long> {
}
