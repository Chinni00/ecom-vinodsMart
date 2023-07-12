import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../Responsive";


const Container = styled.div`
display: flex;
${mobile({flexDirection:'column'})}
`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor:pointer;
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:'none'})}
`
const Title =styled.h3`
margin-bottom: 30px;
`
const List =styled.ul`
margin: 0%;
padding: 0%;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const Payment =styled.img`
width: 50%;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:'#fff8f8'})}
`

const Footer = () => {
  return (
    <Container>
         <Left>
            <Logo>VINOD'S MART</Logo>
            <Desc>There are somany variations of passages of lorem ipsum availability
                but, the majority of suffered from alternation in some forms , by injected humor
                or some random words which did nt look even slightly behaviour
            </Desc>
            <SocialContainer>
                <SocialIcon color="#385999">
                     <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="#E4405F">
                     <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="#55ACEE">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="#E60023">
                    <PinterestIcon />
                </SocialIcon>
                <SocialIcon>
                    
                </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>Useful List</Title>
            <List >
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mens Fashion</ListItem>
                <ListItem>Womens Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <LocationOnIcon style={{marginRight:'10px'}} /> 6/12 KotiReddy Circle Kadapa , India
            </ContactItem>
            <ContactItem>
               <PhoneIcon style={{marginRight:'10px'}} /> +91 911 212 1234
            </ContactItem>
            <ContactItem>
               <EmailIcon style={{marginRight:'10px'}} /> contact@vinod.com 
            </ContactItem>
            <Payment src='https://www.pngmart.com/files/7/Payment-Background-PNG.png' />
         </Right>

    </Container>
  )
}

export default Footer