import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Product from '../components/Product'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../Responsive'


function SingleProduct() {
	
	const Wrapper = styled.div`
	display: flex;
	/*justify-content: center;
	align-items: center;*/
	${mobile({flexDirection: 'column'})}
	`
	const ImgContainer = styled.div`
	flex: 1;
	margin: 20px;
	text-align: center;
	`
	const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
	margin-top: 20px;
	${mobile({padding: '0 10px'})}
	`
	const Image = styled.img`
	width: 100%;
	object-fit: cover;
	${mobile({width: '75%', height: '40vh'})}
	`
	const Title = styled.h2``
	const Desc = styled.p`
	margin: 20px 0;
	font-weight: 200;
	`
	const Price = styled.span`
	font-weight: 200;
	font-size: 50px;
	`
	const FilterContainer = styled.div`
	width: 80%;
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	${mobile({width: '100%'})}
	`
	const Filter = styled.div`
	display: flex;
	align-items: center;
	`
	const FilterText = styled.span`
	font-size: 30px;
	font-weight: 300;
	${mobile({fontSize: '20px'})}
	`
	const FilterColor = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: ${props => props.color};
	margin: 0 5px;
	cursor: pointer;
	`
	const FilterSize = styled.select`
	margin: 5px;
	padding: 5px;
	`
	const FilterSizeOption = styled.option``
	
const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
margin-bottom: 10px;
`
const AmountContainer = styled.div`
display: flex;
font-weight: 700;
align-items: center;
`
const Button = styled.button`
padding: 10px;
background: white;
border: 1px solid teal;
cursor: pointer;

&hover{
	background: #D6B8B8;
}
`
const Amount = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 10px;
margin:  0 5px;
border: 1px solid teal;
`
	
  return (
   <>
    <Navbar />
    <Anouncement />
    <Wrapper>
     <ImgContainer>
      <Image src='/images/gallery4.jpeg' alt='product image' />
     </ImgContainer>
     <InfoContainer>  
      <Title>title</Title>
      <Desc>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsumyou need to be sure there isnt anything
      </Desc>
      <Price>$20</Price>
      <FilterContainer>
     <Filter>
       <FilterText>Color</FilterText>
        <FilterColor color='red' />
        <FilterColor color='black' />
        <FilterColor color='green' />
     </Filter>
     <Filter>
       <FilterText>Size</FilterText>
       <FilterSize>
        <FilterSizeOption>XS</FilterSizeOption>
        <FilterSizeOption>S</FilterSizeOption>
        <FilterSizeOption>M</FilterSizeOption>
        <FilterSizeOption>L</FilterSizeOption>
        <FilterSizeOption>XL</FilterSizeOption>
       </FilterSize>
     </Filter>
    </FilterContainer>
    <AddContainer>
       <AmountContainer>
        <i className='fa-solid fa-minus'></i>
        <Amount>1</Amount>
        <i className='fa-solid fa-plus'></i>
       </AmountContainer>
       <Button>Add to Cart</Button>
    </AddContainer>
     </InfoContainer>
    </Wrapper>
    <NewsLetter />
    <Footer />
  </>    
  );
}

export default SingleProduct;