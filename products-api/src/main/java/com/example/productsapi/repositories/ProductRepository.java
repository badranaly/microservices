package com.example.productsapi.repositories;

import com.example.productsapi.models.Product;
import org.hibernate.Session;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;
import java.util.List;

@SpringBootApplication
@EnableEurekaClient
@RestController
public interface ProductRepository extends CrudRepository<Product, Long> {
    List<Product> findByProductCategory(String categoryName);
    List<Product> findByUserSellingId(int userSellingId);
}

