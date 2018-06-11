package com.example.shoppingcartapi.controllers;


import com.example.shoppingcartapi.models.ShoppingCart;
import com.example.shoppingcartapi.repositories.ShoppingCartRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.shoppingcartapi.models.ShoppingCart;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RestController
public class ShoppingCartController {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @GetMapping("/")
    public Iterable<ShoppingCart> findAllShoppingCarts() {
        return shoppingCartRepository.findAll();
    }

    @GetMapping("/{cartId}")
    public ShoppingCart findShoppingCartById(@PathVariable Long cartId) throws NotFoundException {

        ShoppingCart foundShoppingCart = shoppingCartRepository.findOne(cartId);

        if (foundShoppingCart == null) {
            throw new NotFoundException("ShoppingCart with ID of " + cartId + " was not found!");
        }


        return foundShoppingCart;
    }

    @DeleteMapping("/{cartId}")
    public HttpStatus deleteShoppingCartById(@PathVariable Long cartId) throws EmptyResultDataAccessException {
        shoppingCartRepository.delete(cartId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public ShoppingCart createNewShoppingCart(@RequestBody ShoppingCart newShoppingCart) {
        return shoppingCartRepository.save(newShoppingCart);
    }

    @PatchMapping("/{cartId}")
    public ShoppingCart updateShoppingCartById(@PathVariable Long cartId, @RequestBody ShoppingCart cartRequest) throws NotFoundException {
        ShoppingCart cartFromDb = shoppingCartRepository.findOne(cartId);

        if (cartFromDb == null) {
            throw new NotFoundException("ShoppingCart with ID of " + cartId + " was not found!");
        }

        cartFromDb.setProduct_id(cartRequest.getProduct_id());
        cartFromDb.setUser_id(cartRequest.getUser_id());

        return shoppingCartRepository.save(cartFromDb);
    }

    @ExceptionHandler
    void handleShoppingCartNotFound(
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