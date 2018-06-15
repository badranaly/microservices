import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import services from '../services/apiServices'
import {Link, Redirect} from 'react-router-dom';


class SellingComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            fireRedirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        services.sellProduct(this.state)
        .then(data => {
            console.log(data)
            this.setState({
                fireRedirect : true
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleChange(e){
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]:value
        })
        console.log(name)
    }

    render(){
        return(
            <div style={{textAlign: 'center'}}><br/>
                <Link to='/'>Go back</Link><br /><br />
               <input type="text"   name="productName" placeholder="Product Name" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productDescription" placeholder="Product Description" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productCategory" placeholder="Product Category" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productPrice" placeholder="Product Price" onChange={this.handleChange}/><br/><br/>
               <input type="text"  name="productImage" placeholder="Image URL" onChange={this.handleChange}/><br />
               <input type="hidden"  name="userSellingId" value="2" onChange={this.handleChange}/><br/><br/>
               <input type="hidden"  name="userBoughtId" value="1" onChange={this.handleChange}/>
               {this.state.fireRedirect ? <Redirect to='/' /> : ""}    
               <Button onClick={this.handleClick} >Submit</Button>
            </div>
        )
    }
}

export default SellingComponent;