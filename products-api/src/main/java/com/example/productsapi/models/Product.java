package com.example.productsapi.models;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "PRODUCTS")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "PRODUCT_NAME")
    private String productName;

    @Column(name = "PRODUCT_PRICE")
    private int productPrice;

    @Column(name = "PRODUCT_DESCRIPTION")
    private String productDescription;

    @Column(name = "PRODUCT_CATEGORY")
    private String productCategory;

    @Column(name = "USER_SELLING_ID")
    private String userSellingId;

    @Column(name = "USER_BOUGHT_ID")
    private String userBoughtId;

    public Product(String productName, int productPrice, String productDescription, String productCategory, int userSellingId, int userBoughtId) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
        this.userBoughtId = userBoughtId;
        this.userSellingId = userSellingId;
    }
}