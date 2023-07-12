import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState,useContext } from "react";
import { cartContext } from "../Pages/CartContext";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../store/Reducer";



const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;

background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 400px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info} {
opacity: 1;
}

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
top: 10%;
display: flex;
align-items: center;
justify-content: center;
`
const Image = styled.img`
height: 90%;
width: auto;
z-index: 2;

`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.2s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`
const Title = styled.h3`
position: absolute;
top: 70%;
text-align: center;
font-weight: 400;
`

const Price =styled.div`
position: absolute;
font-style: italic;
top: 90%;
z-index: 100;
padding: 5px;
padding-bottom: 10px;
color: black;

font-size: x-large;
font-weight: 600;
width: 160px;
text-align: center;
padding: 5px 15px;
`



const Product = ({item }) => {
const dispatch = useDispatch();
const state = useSelector(state=>state.cart)
    // const {addToCart} = useContext(cartContext)
    const handleAddToCart=()=>{
    //    addToCart(item);
    dispatch(cartActions.addItemToCart(item))
    }
console.log('state',state)
  return (
    <Container>
        <Circle >
        <Image src={item.image} />
        <Info>
            <Icon  onClick={handleAddToCart}  >
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <SearchOutlinedIcon />
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
        </Circle>
        <Title >{item.title}</Title>
        <Price>$ {item.price}</Price>
    </Container>
  )
}

export default Product