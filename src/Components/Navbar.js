import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../Responsive";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import { useContext } from "react";
import { cartContext } from "../Pages/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/Reducer";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const token = useSelector(state=>state.cart.token)
  const cartItems = useSelector(state=>state.cart)

  console.log('cartItems',cartItems)
  // const {cartItems} = useContext(cartContext)
  const logoutHandler =()=>{
       dispatch(cartActions.setToken(''))
       localStorage.removeItem('token')
       navigate('/')
  }
  return (
   <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="search" />
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>
            <Link to='/home' style={{textDecoration:'none',color:'black'}} >VINOD'S MART</Link>
            </Logo>
          </Center>
          <Right>
         {token && <MenuItem>
              <Link to='/home' style={{textDecoration:'none',color:'black'}} >HOME</Link>
            </MenuItem>}
           {!token && <MenuItem>
              <Link to='/register' style={{textDecoration:'none',color:'black'}} >REGISTER</Link>
            </MenuItem>}
           {!token && <MenuItem>
            <Link to='/' style={{textDecoration:'none',color:'black'}} >LOGIN</Link>
            </MenuItem>}
           {token && <MenuItem>
            <Link to='*' style={{textDecoration:'none',color:'black'}} onClick={logoutHandler} >LOGOUT</Link>
            </MenuItem>}
            <MenuItem>
            {token && <Link to='/cart'>
              <Badge badgeContent={cartItems.totalQuantity || 0} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
              </Link>}

            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
      
    </>
  );
};
export default Navbar;
