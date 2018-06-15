package com.example.productsapi.models;

import lombok.*;
import org.springframework.data.jpa.repository.Query;

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

    @Column(name = "PRODUCT_IMAGE")
    private String productImage;

    @Column(name = "USER_SELLING_ID")
    private Integer userSellingId;

    @Column(name = "USER_BOUGHT_ID")
    private int userBoughtId;

    public Product(String productName, int productPrice, String productDescription, String productCategory, String productImage, Integer userSellingId, int userBoughtId) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
        this.userBoughtId = userBoughtId;
        this.userSellingId = userSellingId;
        this.productImage = productImage;
    }
}