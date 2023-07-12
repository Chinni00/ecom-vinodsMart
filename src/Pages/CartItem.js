import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from "react-redux";
import { cartActions } from "../store/Reducer";

const Product =styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0px;
padding-bottom: 5px;
border-bottom: 1px solid #ccc;
`

const ProductDetail =styled.div`
flex: 2;
display: flex;
`

const Image =styled.img`
width: 150px

`
const Details =styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName =styled.span``

const ProductId =styled.span``
const ProductSize =styled.span``
const ProductColor =styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const PriceDetails =styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice=styled.div`
margin-right: 90px;
font-size: 30px;
font-weight: 200;
`

const CartItem = ({item}) => {
  const dispatch = useDispatch();
    /* const [cartAmount,setCartAmount] = useState(amount) */
    const handleIncrement=()=>{
        dispatch(cartActions.addItemToCart(item))
    }
    const handleDecrement=()=>{
       dispatch(cartActions.removeItemFromCart(item.id))
    } 
   
  return (
    <Product>
      <ProductDetail>
        <Image src={item.image} />
        <Details>
          <ProductName>
            <b>PRODUCT:</b> {item.title}
          </ProductName>
          <ProductId>
            <b>PRODUCT ID: </b>
            {item.id}
          </ProductId>
          <ProductColor color="red" />
          <ProductSize>
            <b>RATING:</b>
            {item.rating}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetails>
        <ProductAmountContainer>
          <AddIcon onClick={handleIncrement} style={{cursor:'pointer'}} />
          <ProductAmount>{item.quantity}</ProductAmount>
          <RemoveIcon onClick={handleDecrement} style={{cursor:'pointer'}} /> <i>($.{item.price} per item)</i>
        </ProductAmountContainer>
        <ProductPrice>$.{item.totalPrice.toFixed(2)}</ProductPrice>
      </PriceDetails>
    </Product>
  );
};

export default CartItem;
