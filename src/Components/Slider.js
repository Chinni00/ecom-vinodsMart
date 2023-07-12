import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState,useEffect } from "react";
import {mobile} from '../Responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:'none'})}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0%;
  bottom: 0%;

  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  
  height: 100px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props=>props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0)
    const handleClick=(direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 :2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }

    useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick('left')}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg='f5fafd'>
          <ImgContainer>
            <Image src="http://www.allthefrugalladies.com/frugalladies/uploads/2013/11/Sale-Shopping.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE ! GET FLAT 40% DISCOUNT ON NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fcf1ed'>
          <ImgContainer>
            <Image src="https://i.pinimg.com/originals/fb/bc/15/fbbc15bae2db37016750f001076aa504.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE ! GET FLAT 40% DISCOUNT ON NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fbf0f4'>
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/women-are-shopping-summer-she-is-using-credit-card-enjoys-shopping_46139-913.jpg?size=626&ext=jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE ! GET FLAT 40% DISCOUNT ON NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick('right')}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
