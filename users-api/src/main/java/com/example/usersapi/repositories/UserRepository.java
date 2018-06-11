package com.example.usersapi.repositories;

import com.example.usersapi.models.User;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;


@SpringBootApplication
@EnableEurekaClient
public interface UserRepository extends CrudRepository<User, Long> {

//    Optional<User> findById(Long userId);

//    void deleteById(Long userId);
}