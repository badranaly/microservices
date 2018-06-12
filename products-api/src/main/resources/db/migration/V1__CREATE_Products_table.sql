CREATE TABLE PRODUCTS(
    ID Serial,
    PRODUCT_NAME varchar(100) NOT NULL,
    PRODUCT_DESCRIPTION varchar(100) NOT NULL,
    PRODUCT_CATEGORY varchar(100) NOT NULL,
    PRODUCT_PRICE INT NOT NULL,
    PRODUCT_IMAGE TEXT,
    USER_BOUGHT_ID INT,
    USER_SELLING_ID INT
);