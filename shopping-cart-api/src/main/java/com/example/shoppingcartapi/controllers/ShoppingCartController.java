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

    @GetMapping("/{userId}")
    public ShoppingCart findShoppingCartById(@PathVariable Long userId) throws NotFoundException {

        ShoppingCart foundShoppingCart = shoppingCartRepository.findOne(userId);

        if (foundShoppingCart == null) {
            throw new NotFoundException("ShoppingCart with ID of " + userId + " was not found!");
        }


        return foundShoppingCart;
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteShoppingCartById(@PathVariable Long userId) throws EmptyResultDataAccessException {
        shoppingCartRepository.delete(userId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public ShoppingCart createNewShoppingCart(@RequestBody ShoppingCart newShoppingCart) {
        return shoppingCartRepository.save(newShoppingCart);
    }

    @PatchMapping("/{userId}")
    public ShoppingCart updateShoppingCartById(@PathVariable Long userId, @RequestBody ShoppingCart userRequest) throws NotFoundException {
        ShoppingCart userFromDb = shoppingCartRepository.findOne(userId);

        if (userFromDb == null) {
            throw new NotFoundException("ShoppingCart with ID of " + userId + " was not found!");
        }

        userFromDb.setProduct_id(userRequest.getProduct_id());
        userFromDb.setUser_id(userRequest.getUser_id());

        return shoppingCartRepository.save(userFromDb);
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