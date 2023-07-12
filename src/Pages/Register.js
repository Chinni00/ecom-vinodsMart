import styled from "styled-components"
import { mobile } from "../Responsive"
import { useState} from "react"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import { useRef } from "react"


const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(225,225,225,0.5),rgba(225,225,225,0.5)),
 url('https://www.alttabgs.com/wp-content/uploads/2017/01/contact_background_form.jpg') center;

 display: flex;
 justify-content: center;
 align-items: center;
 ${mobile({width:'75'})}
`
const Wrapper=styled.div`
width: 40%;
padding: 20px;
background-color: white;
`
const Form=styled.form`
display: flex;
flex-wrap: wrap;
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Input=styled.input`
flex: 1;
max-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;

`


const Register = () => {
    const [isValidate,setIsValidate] = useState(true)
    const inputFnameRef = useRef();
    const inputLnameRef = useRef();
    const inputUserNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputConformPasswordRef = useRef();
 const formHandler =(e)=>{
  e.preventDefault();
const enteredFname = inputFnameRef.current.value;
const enteredLname = inputLnameRef.current.value;
const enteredUserName = inputUserNameRef.current.value;
const enteredEmail = inputEmailRef.current.value;
const enteredPassword = inputPasswordRef.current.value;
const enteredConformPassword = inputConformPasswordRef.current.value;
  
if(enteredPassword !==enteredConformPassword){
    setIsValidate(false)
    return '';
}
 fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEKsZzPMXu-Cb46SzLE_0y4Tvu9gMpfYc',
 {
    method:'POST',
    body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
    }),
    headers:{
        'Content-Type':'application/json'
    }
 }).then(res=>{
    if(res.ok){
       res.json().then(data=>{
         console.log(data)
         alert('successfully created account')
       });
    
    }else{
        return res.json().then((data) => {
            let errorMessage = "Authentication failure";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
    }
 }).catch(err=>alert(err.message))
 };

  return (
    <>
    <Announcement />
    <Navbar />
    <Container>
      
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={formHandler}>
                <Input name='first name'  ref={inputFnameRef}   placeholder='first name' required />
                <Input name='last name' ref={inputLnameRef} placeholder='last name' required />
                <Input name='username'  ref={inputUserNameRef}  placeholder='username' required />
                <Input type="email" ref={inputEmailRef} name='email' placeholder='email' required />
                <Input type="password" ref={inputPasswordRef} name='password' placeholder='password'  required/>
                <Input type="password" ref={inputConformPasswordRef}  name='conform password' placeholder='confirm password' required />
                {!isValidate && <small style={{color:'red'}}>Please enter password and conform password correctly</small> }
                <Agreement>
                    By creating an account, I consent to the processing of my 
                    personal in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type="submit">Create</Button> 
            </Form>
            
        </Wrapper>
    </Container>
    </>
  )
}

export default Register