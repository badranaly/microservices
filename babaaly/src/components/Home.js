import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import services from '../services/apiServices';
import Products from './Products';

class Home extends Component{
    constructor(props){
        super(props);
    }
    

    render(){
        return(
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
            <Products />
            </div>
        )
    }
}

export default Home;