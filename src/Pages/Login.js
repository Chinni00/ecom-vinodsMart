import styled from "styled-components"
import { mobile } from "../Responsive"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/Reducer"
import Loader from "./Loader"


const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(225,225,225,0.5),rgba(225,225,225,0.5)),
 url('https://peaseandcurren.com/wp-content/uploads/2020/03/Retail-and-online-shopping-2048x1365.jpg') center ;
background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;

`
const Wrapper=styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width:'75%'})}
`
const Form=styled.form`
display: flex;
flex-direction: column;
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Input=styled.input`
flex: 1;
width: 90%;
margin: 10px 0px;
padding: 10px;
`

const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`
const Link= styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {

  const isLoading = useSelector(state=>state.cart.isLoading);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler=(e)=>{
   e.preventDefault();
   dispatch(cartActions.setLoader(true))
   const enteredEmail = inputEmailRef.current.value;
   const enteredPassword = inputPasswordRef.current.value;
   
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEKsZzPMXu-Cb46SzLE_0y4Tvu9gMpfYc',{
    method:'POST',
    body:JSON.stringify({
         email : enteredEmail,
         password : enteredPassword
    }),
    headers:{
      'Content-Type':'application/json'
    }
   }).then(res=>{
    dispatch(cartActions.setLoader(false))
        if(res.ok){
          res.json().then(data=>{
            localStorage.setItem('token',data.idToken)
            navigate('/home')
           dispatch(cartActions.setToken(data.idToken))
            console.log(data)
          })
        }else{
          return res.json().then(data=>{
            let errorMessage = "Authentication failure";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          })
        }
   }).catch(err=>alert(err.message))
  }
  return (
    <>
    <Announcement />
    <Navbar />
   {isLoading && <Loader />}
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form onSubmit={loginHandler}>
                <Input ref={inputEmailRef} placeholder='email' type="email" />
                <Input ref={inputPasswordRef} placeholder='password' type="password" />
                <Button>LOGIN</Button>  
            </Form>
            <Link onClick={()=>{navigate('/forgotPassword')}}>FORGET PASSWORD</Link><br />
            <Link onClick={()=>{navigate('/register')}}>CREATE NEW ACCOUNT</Link>
        </Wrapper>
    </Container></>
  )
}

export default Login