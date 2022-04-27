package com.example.testentry.web.resource;

import com.example.testentry.domain.Stock;
import com.example.testentry.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@Controller
@RequestMapping("/api")
public class StockResource {

    @Autowired
    private StockService stockService;

    @RequestMapping(value = "/stocks", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Stock> creatStock(HttpServletRequest request, @Valid @RequestBody Stock stock) throws URISyntaxException {
        Stock stock1 = stockService.save(stock);
        return ResponseEntity.created(new URI("/api/stock" + stock1.getProductID())).body(stock1);
    }

    @RequestMapping(value = "/stocks", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Stock> updateStock(HttpServletRequest request, @Valid @RequestBody Stock stock) throws URISyntaxException {
        if(stock.getProductID() == null){
            return creatStock(request, stock);
        }
        Stock stock1 = stockService.save(stock);

        return ResponseEntity.ok().body(stock1);
    }

    @RequestMapping(value = "/stocks/{productID}", method = RequestMethod.GET)
    public ResponseEntity<Stock> findOneStock(@PathVariable("productID") Long productID){
        Optional<Stock> stock = stockService.findOne(productID);
        if (stock.isPresent()) {
            return new ResponseEntity<>(stock.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/stocks", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Stock>> findAllStock (HttpServletRequest request){
        Iterable<Stock> stocks = stockService.findAll();
        return ResponseEntity.ok().body(stocks);
    }

    @RequestMapping(value = "/stocks/{productID}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteStock (@PathVariable("productID") Long productID) {

        if(productID != null){
            stockService.delete(productID);
        }
        return ResponseEntity.ok().build();
    }
}
