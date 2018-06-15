import React, {Component} from 'react';
import services from '../services/apiServices'; 
import Product from './Product';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, DropdownButton} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../res/style/Product.css';


class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiDataLoaded: false,
            apiData: null,
            category: null,
            id: null
        }
        this.renderData = this.renderData.bind(this)
        this.handleCategory = this.handleCategory.bind(this);
    }

    componentDidMount(){
        services.getAllProducts()
        .then(data => {
            console.log(data);
            this.setState({
                apiDataLoaded: true,
                apiData: data,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleCategory(e){
        let name = e.target.name;
        services.getCategory(name)
        .then(data => {
            console.log('data returned from handle cat', data)
            this.setState({
                apiDataLoaded: false,
                category : data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderData(){
        let myData = this.state.apiData.data
        console.log('this is my data', myData)
        return (
            myData.map(el => {
                return   <div className="col-md-2">
                <Product data={el} category={this.props.category}/>
                </div>
            })
        )
    }

    renderCategory(){
        let myData = this.state.category.data
        console.log("my data category", myData)
            return (
                myData.map(el => {
                    return (
                        <div className="col-md-2">
                            <Product data={el} category={this.state.category.data.productCategory}/>
                        </div>
                    )
                })
            )
    }

    render(){
        return(
            <div className="container wrapper">
            <DropdownButton
                bsStyle={"Categories".toLowerCase()}
                title="Categories"
                 >
                    <MenuItem eventKey="1" onClick={this.handleCategory} name="electronics">Electronic</MenuItem>
                    <MenuItem eventKey="2" onClick={this.handleCategory} name="vehicles">Vehicles</MenuItem>
                    <MenuItem eventKey="3" onClick={this.handleCategory} name="clothing">Clothing</MenuItem>
                    <MenuItem eventKey="3" onClick={this.handleCategory} name="tools">Tools</MenuItem>
                    <MenuItem eventKey="3" onClick={this.handleCategory} name="toys">Toys</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" onClick={this.handleCategory} name="misc">misc</MenuItem>
             </DropdownButton><br /><br />
                {this.state.apiDataLoaded ? this.renderData() : ""}
                {this.state.category ? this.renderCategory() : ""}
                
            </div>
        )
    }
}

export default Products;