import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { useReducer,useContext, useState, useEffect } from "react";
import { cartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/Reducer";



const Container=styled.div``;
const Wrapper=styled.div`
padding: 20px;
`;
const Title=styled.h1`
font-weight: 300;
text-align: center;
`;
const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type==='filled' && 'none'};
background-color: ${props=>props.type==='filled' ? 'black':'transparent'};
color: ${props=>props.type==='filled' && 'white'};
`
const TopTexts=styled.div`

`
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom=styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;

`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==='total' && '500'};
font-size: ${props=>props.type==='total' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
cursor: pointer;
font-weight: 600;
`

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
font-size: 30px;
font-weight: 200;
`
const Hr=styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const reducer =(state,action)=>{
       switch (action.type){
        case 'INCREMENT':
           return {...state,amount:state.amount+1}
        case 'DECREMENT':
           return {...state,amount:Math.max(state.amount-1,0)}
        default:
          return state

       }
}

const Cart = () => {
    /* const [totalPrice,setTotalPrice] = useState(0)  */


    /* const {cartItems} = useContext(cartContext) */

    const cartItems = useSelector(state=>state.cart)

    /* useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price ;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]); */

  // Rest of the component code...

/*     
    const initialState ={
        amount:1,
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    console.log(state)
    const handleIncrement =()=>{
        dispatch({type:'INCREMENT'});
        
    }

    const handleDecrement =()=>{
        dispatch({type:'DECREMENT'});
    } */
   const dispatch = useDispatch()
   const navigate = useNavigate()
    const resetCart =()=>{
      
      dispatch(cartActions.resetCart())
      alert('Thank you for Shopping in our Cart !')
      navigate('/home')
    }
    console.log(cartItems)

  return (
    <Container>
    <Announcement />
         <Navbar />
           <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
            <Link to='/' >
                <TopButton >
            
                CONTINUE SHOPPING
                
                </TopButton>
                </Link>
                <TopTexts>
                    <TopText>Shopping Bag ({cartItems?cartItems.totalQuantity:0})</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled" >CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                {cartItems.items.length===0 && <h2>no item added in cart</h2>}
                 {cartItems.items.map(item => 
                    <CartItem 
                    item ={item}
                     />
                    /* <Product>
                        <ProductDetail>
                            <Image src={item.image} />
                            <Details>
                                <ProductName><b>PRODUCT:</b> {item.title}</ProductName>
                                <ProductId><b>PRODUCT ID: </b>{item.id}</ProductId>
                                <ProductColor color="red" />
                                <ProductSize><b>RATING:</b>{item.rating.rate}</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                               <AddIcon onClick={handleIncrement} />
                               <ProductAmount>{state.amount}</ProductAmount>
                               <RemoveIcon onClick={handleDecrement} />
                            </ProductAmountContainer>
                            <ProductPrice>${+state.amount*item.price.toFixed(2)}</ProductPrice>
                        </PriceDetails>
                    </Product> */
                    
                    )}
                    
                </Info>
                <Summary>
                   <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                   <SummaryItem>
                        <SummaryItemText> Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cartItems.subTotal.toFixed(2)}</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                        <SummaryItemText> Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                        <SummaryItemText> Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem type='total'>
                        <SummaryItemText  > Total</SummaryItemText>
                        <SummaryItemPrice>$ {cartItems.subTotal.toFixed(2)}</SummaryItemPrice>
                   </SummaryItem>
                   <Button onClick={resetCart}>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
           </Wrapper>
         <Footer />
    </Container>
  )
}

export default Cart