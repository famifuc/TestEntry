package com.example.testentry.web.resource;

import com.example.testentry.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.testentry.domain.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@Controller
@RequestMapping("/api")
public class ProductResource {

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/product", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> creatProduct(HttpServletRequest request, @Valid @RequestBody Product product) throws URISyntaxException {
        if(product.getProductID() != null){
            return null;
        }
        Product product1 = productService.save(product);
        return ResponseEntity.created(new URI("/api/product" + product1.getProductID())).body(product1);
    }

    @RequestMapping(value = "/product/update/", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> updateProduct(HttpServletRequest request, @Valid @RequestBody Product product) throws URISyntaxException {
        if(product.getProductID() == null){
            return creatProduct(request, product);
        }
        Product product1 = productService.save(product);

        return ResponseEntity.ok().body(product1);
    }

    @RequestMapping(value = "/product/{productID}", method = RequestMethod.GET)
    public ResponseEntity<Product> findOneProduct (@PathVariable("productID") Long productID){
        Optional<Product> product = productService.findOne(productID);
        if (product.isPresent()) {
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Product>> findAllProduct (HttpServletRequest request){
        Iterable<Product> product = productService.findAll();
        return ResponseEntity.ok().body(product);
    }

    @RequestMapping(value = "/product/{productID}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteProduct (@PathVariable("productID") Long productID) {

        if(productID != null){
            productService.delete(productID);
        }
        return ResponseEntity.ok().build();
    }


}
