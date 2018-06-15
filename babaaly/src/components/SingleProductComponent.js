import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import services from '../services/apiServices'
import {Button} from 'react-bootstrap'

class SingleProductComponent extends Component {
    constructor(){
        super();
        this.state = {
            id: null,
            fireRedirect: false
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount(){
        let id = this.props.id
        console.log("this props id", id)
        services.getSingleProduct(id)
        .then(data => {
            console.log(data)
            this.setState({
                id
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleChange(e){
        let value = e.target.value
        let name = e.target.name
        this.setState({
            [name]:value
        })
    }

    handleUpdate(){
        console.log(this.state)
            services.updateProduct(this.state)
            .then(data => {
                console.log(data)
                this.setState({
                    fireRedirect: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        console.log("inside single product", this)
        return (
            <div id="new-info">
                <Link to='/'>Go back</Link><br /><br />
               <input type="text"   name="productName" placeholder="Product Name" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productDescription" placeholder="Product Description" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productCategory" placeholder="Product Category" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productPrice" placeholder="Product Price" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productImage" placeholder="Image URL" onChange={this.handleChange}/><br />
               <input type="hidden"  name="userSellingId" value="2" onChange={this.handleChange}/><br/><br/>
               <input type="hidden"  name="userBoughtId" value="1" onChange={this.handleChange}/>
               <Button className="btn btn-primary" onClick={this.handleUpdate}>Update item</Button>
               {this.state.fireRedirect ? <Redirect to='/' /> : ""}
            </div>
        )
    }
}

export default SingleProductComponent;