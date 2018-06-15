import Axios from 'axios';

const services = {
    getCategory(data){
        console.log(data)
        return Axios({
            method: "GET",
            url: `http://ec2-52-91-237-182.compute-1.amazonaws.com:8080/products/categories/${data}`,
        })
    },
    getAllProducts(){
        return Axios({
            method: "GET",
            url: `http://ec2-52-91-237-182.compute-1.amazonaws.com:8080/products`
        })
    },
    sellProduct(data){
        console.log(data)
        return Axios({
            method: "POST",
            url:"http://ec2-52-91-237-182.compute-1.amazonaws.com:8080/products",
            data: {
                productName: data.productName,
                productDescription: data.productDescription,
                productCategory: data.productCategory,
                productPrice: parseInt(data.productPrice),
                productImage: data.productImage,
                userSellingId: 1,
                userBoughtId: 2
            }
        })
    },
    getSellingItems(id){
    console.log('id of user', id)
        return Axios({
            method: "GET",
            url:`http://ec2-52-91-237-182.compute-1.amazonaws.com:8080/products/myproducts/${id}`
        })
    },

    deleteProduct(id){
        return Axios({
            method: "DELETE",
            url: `http://ec2-52-91-237-182.compute-1.amazonaws.com:8080/products/${id}`
        })
    },

    getSingleProduct(id){
        console.log('getting data for id', id)
        return Axios({
            method: "GET",
            url: `http://ec2-52-91-237-182.compute-1.amazonaws.com:8080/products/${id}`
        })
    },

    updateProduct(data){
        console.log('inside update', data)
        return Axios({
            method: "PATCH",
            url: `http://ec2-52-91-237-182.compute-1.amazonaws.com:8080/products/${data.id}`,
            data: {
                productName: data.productName,
                productDescription: data.productDescription,
                productCategory: data.productCategory,
                productPrice: parseInt(data.productPrice),
                productImage: data.productImage,
                userSellingId: 1,
                userBoughtId: 2
            }
        })
    }
}

export default services