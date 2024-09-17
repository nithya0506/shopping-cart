import React from 'react';
import {
    Container, Dropdown, FormControl, Navbar,
    Nav, Badge, Button
} from "react-bootstrap";
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext';
import { CartState } from '../context/Context';

const Header = () => {
    const { state: { cart }, dispatch, productDispatch } = CartState();
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () =>{
        console.log("handleLogout")
        auth.logOut();
        navigate("/");

    }
    return (
        <Navbar bg='dark' variant='dark' style={{ height: 80 }} >
            <Container>
                <Navbar.Brand>
                    <Link to="/home" style={{ fontSize: 30 }}>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }}
                        Placeholder='Search a Product' className='m-auto'
                        onChange={(e)=>productDispatch({
                            type: "FILTER_SEARCH_QUERY",
                            payload: e.target.value
                        })}></FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color="white" fontSize="25px" ></FaShoppingCart>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 280 }}>
                            {cart.length > 0 ? (
                                <>
                                    {
                                        cart.map((prod) => (
                                            <span className='cartItem' key={prod.id}>
                                                <img src={prod.image} alt={prod.name} className="cartItemImg" />
                                                <div className='cartItemDetails'>
                                                    <span>{prod.name}</span>
                                                    <span>  ₹{prod.price}</span>
                                                </div>
                                                <AiFillDelete fontSize="20px" style={{ pointer: "cursor" }}
                                                    onClick={() => dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })}
                                                />
                                            </span>
                                        ))
                                    }
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>Go To Cart</Button>
                                    </Link>
                                </>
                            ) : (<span style={{ padding: 10 }}>Cart is Empty</span>)}
                        </Dropdown.Menu>
                    </Dropdown>;
                </Nav>
                <div>
                    <span onClick={handleLogout} style={{ fontSize: 15 , color: "white" }}>Log Out</span>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header;