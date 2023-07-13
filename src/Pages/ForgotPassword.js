import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Loader from './Loader'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/Reducer'
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`
const Input=styled.input`
flex: 1;
width: 90%;
margin: 10px 0px;
padding: 10px;
`
const Container = styled.div`

 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
`

const ForgotPassword = () => {
    const emailRef = useRef();
    const dispatch = useDispatch()
    const isLoading = useSelector(state=>state.cart.isLoading); 
    const ForgotPasswordHandler =()=>{
      dispatch(cartActions.setLoader(true))
      const enteredEmail = emailRef.current.value;
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCEKsZzPMXu-Cb46SzLE_0y4Tvu9gMpfYc',{
        method:'POST',
        body:JSON.stringify({
            requestType:'PASSWORD_RESET',
            email:enteredEmail,
        }),
        headers:{
            'Content-Type':'application/json'
        }
      }).then(res=>{
        dispatch(cartActions.setLoader(false))
        if(res.ok){
            alert('Link sent to your mail successfully')
        }else{
            return res.json().then(data=>{
                let errorMessage = "something went wrong";
                if (data && data.error && data.error.message) {
                  errorMessage = data.error.message;
                }
                throw new Error(errorMessage);
              })
        }
      }).catch(err=>alert(err.message))
    }
  return (
    <div>
        <Announcement />
        <Navbar />
        <h1 style={{textAlign:'center',marginTop:'1em'}}>Forgot Password</h1>
        <marquee><i>This will sent a link to your email that can make you change your password</i></marquee>
      {isLoading && <Loader />}
        <Container>
        <Input ref={emailRef} placeholder='email' type="email" />
        <Button onClick={ForgotPasswordHandler}>Send Link</Button> 
        </Container>
          
    </div>
  )
}

export default ForgotPassword