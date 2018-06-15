import React, {Component} from 'react';
import services from '../services/apiServices'
import {Link, Redirect, Route, Router} from 'react-router-dom';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import SingleProductComponent from './SingleProductComponent'



export default class AccountComponent extends Component {
    constructor(props){
    super(props);
    this.state = {
        accountDataLoaded: false,
        accountData: null,
        newAccountData: null,
        fireRedirect: false
    }
    this.renderAccountData = this.renderAccountData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
}

handleDelete(e){
    let id = e.target.value
    services.deleteProduct(id)
    .then(data => {
        console.log(data)
        window.location.reload();

    })
    .catch(err => {
        console.log(err)
    })
}

handleUpdate(e){
    let id = e.target.value
    this.setState({
        newAccountData: id
    })
}

renderData(){
    return (
        <SingleProductComponent id={this.state.newAccountData} />
    )
}

componentDidMount(){
    let id = 2
    services.getSellingItems(id)
    .then(data => {
        console.log(data)
        this.setState({
            accountDataLoaded: true,
            accountData: data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

renderAccountData(){
    let myData = this.state.accountData;
    return (
        myData.data.map(el => {
            return (
                <div>
                <div className="col-md-2">
                    <div className="card thumbnail">
                    <div className='theImage' >
                        <img className="card-img-top" src={el.productImage} alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{el.productName}</h5>
                            <p className="card-text">{el.productDescription}</p>
                        </div>
                    </div>
                    <Button onClick={this.handleDelete} value={el.id} className="btn btn-danger buybtn" style={{width: '50  px'}}>X</Button>
                    <Button onClick={this.handleUpdate} value={el.id} className="btn btn-primary buybtn" style={{width: '75px'}}>Update</Button>
                </div>
            </div>
            )

        })
    )
}
    render() {
    return (
        <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href='/'>BaBa Aly</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem eventKey={1} href="#">
                            <Link to='/myaccount'>My Account</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to='/sell'>Sell Something</Link>
                        </NavItem>
                        </Nav>
                        <Nav pullRight>
                        <NavItem eventKey={2} href="#">
                            Sign Out
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                 </Navbar>
            <h1 style={{textAlign: 'center'}}>Items I am Selling: </h1>
            {this.state.accountDataLoaded ? this.renderAccountData() : ""}
            {this.state.newAccountData ? this.renderData() : ""}
            
            {/* {this.state.fireRedirect ? <Redirect to='/myaccount' /> : ""} */}
        </div>

        )
    }
}