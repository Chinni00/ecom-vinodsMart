import styled from "styled-components"
import {popularProducts} from '../Pages/data'
import Product from "./Product"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import Announcement from "./Announcement"


const Container = styled.div`
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Title = styled.h1`
letter-spacing: 4px;
padding-top: 10px;
text-decoration: underline red solid;
`

const Products = () => {
  const params = useParams()

 let filteredProducts = popularProducts.filter(
  item => item.category ==params.productName
 );
 
  return (
    <>
   <Announcement />
    <Navbar />
    <center>
      <Title>{params.productName.toUpperCase()}</Title>
    </center>
    <Container>
      {filteredProducts.map(item=>( 
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  )
}

export default Products