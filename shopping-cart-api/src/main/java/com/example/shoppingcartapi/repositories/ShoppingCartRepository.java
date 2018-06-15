package com.example.shoppingcartapi.repositories;

import com.example.shoppingcartapi.models.ShoppingCart;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Long> {

}
