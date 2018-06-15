package com.example.shoppingcartapi.models;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "SHOPPINGCART")
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "PRODUCT_ID")
    private int product_id;

    @Column(name = "USER_ID")
    private int user_id;

    public ShoppingCart(String userName, String firstName, String lastName) {
        this.product_id = product_id;
        this.user_id = user_id;
    }
}