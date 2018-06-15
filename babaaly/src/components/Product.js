import React, {Component} from 'react';
import '../res/style/Product.css';
import {Link} from 'react-router-dom';
import SingleProductComponent from './SingleProductComponent'
import {Button} from 'react-bootstrap'

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClicked: false,
            apiData: null
        }
        this.handleProductSelected = this.handleProductSelected.bind(this);
    }

    handleProductSelected(){
        this.setState({
            buttonClicked: true
            
        })
    }
    renderProductSelected(){
        return (
        <SingleProductComponent product={this.props.data} />
        )
    }

    render(){
        console.log('inside product', this.props.category)
        return (
            <div>
                <div className="card thumbnail">
                <div className='theImage' >
                    <img className="card-img-top" src={this.props.data.productImage} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.productName}</h5>
                        <p className="card-text">{this.props.data.productDescription}</p>
                    </div>
                </div>
             <Link to={`/products/${this.props.data.id}`} className="btn btn-primary buybtn">Buy Now ${this.props.data.productPrice}</Link>
            </div>
        )
    }
}

export default Product;