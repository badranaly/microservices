package com.example.productsapi.controllers;

import com.example.productsapi.models.Product;
import com.example.productsapi.repositories.ProductRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.productsapi.models.Product;

import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Path;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class ProductsController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/")
    public Iterable<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{productId}")
    public Product findProductById(@PathVariable Long productId) throws NotFoundException {

        Product foundProduct = productRepository.findOne(productId);

        if (foundProduct == null) {
            throw new NotFoundException("Product with ID of " + productId + " was not found!");
        }


        return foundProduct;
    }

    @GetMapping("/categories/{categoryName}")
    public Iterable<Product> findAllProductsByCategory(@PathVariable String categoryName){
        return productRepository.findByProductCategory(categoryName);
    }


    @DeleteMapping("/{productId}")
    public HttpStatus deleteProductById(@PathVariable Long productId) throws EmptyResultDataAccessException {
        productRepository.delete(productId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public Product createNewProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @PatchMapping("/{productId}")
    public Product updateProductById(@PathVariable Long productId, @RequestBody Product productRequest) throws NotFoundException {
        Product productFromDb = productRepository.findOne(productId);

        if (productFromDb == null) {
            throw new NotFoundException("Product with ID of " + productId + " was not found!");
        }

        productFromDb.setProductName(productRequest.getProductName());
        productFromDb.setProductDescription(productRequest.getProductDescription());
        productFromDb.setProductCategory(productRequest.getProductCategory());
        productFromDb.setProductPrice((productRequest.getProductPrice()));
        productFromDb.setUserSellingId((productRequest.getUserSellingId()));
        productFromDb.setUserBoughtId((productRequest.getUserBoughtId()));

        return productRepository.save(productFromDb);
    }

    @ExceptionHandler
    void handleProductNotFound(
            NotFoundException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value(), exception.getMessage());
    }

    @ExceptionHandler
    void handleDeleteNotFoundException(
            EmptyResultDataAccessException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value());
    }
}