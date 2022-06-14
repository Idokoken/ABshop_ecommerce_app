import React from 'react'
import styled from 'styled-components'
//import Footers from './Footers'
import {mobile} from '../Responsive'

function Footer() {
	
	const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 20px;
	${mobile({flexDirection: 'column-reverse'})}
	`
	const Left = styled.div`
	flex: 1;
	`
	const Logo = styled.h1`
	
	`
	const Desc = styled.p`
	margin: 20px 0;
	`
	const SocialContainer = styled.div`
	display: flex;
	`
	const SocialIcon = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	color: white;
	background-color: ${props => props.color};
	margin-right: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	`
	const Center = styled.div`
	flex: 1;
	padding: 20px;
	`
	const Title = styled.h3``
	const List = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	/*flex-direction: column;
	justify-content: center;*/
	list-style-type: none;
	`
	const ListItem = styled.li`
	width: 50%;
	`
	
	const Right = styled.div`
	flex: 1;
	padding: 20px;
	`
	const ContactItem = styled.div`
	margin-bottom: 20px;
	`
	const Payment = styled.img`
	width: 50%;
	`
	
  return (
   <Container>
    <Left>
     <Logo>ABShop</Logo>
     <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus velit eget sapien condimentum</Desc>
     <SocialContainer>  
       <SocialIcon color='#130D81'>
       <i className="fa-brands fa-facebook-square"></i>
       </SocialIcon>
       <SocialIcon color='#8C2C2C'>
       <i className="fa-brands fa-instagram"></i>
       </SocialIcon>
       <SocialIcon color='#18A0D3'>
       <i className="fa-brands fa-twitter"></i>
       </SocialIcon>
       <SocialIcon color='#F71E1E'>
       <i className="fa-brands fa-pinterest"></i>
       </SocialIcon>
     </SocialContainer>
    </Left>
    <Center>
     <Title>Useful Link</Title>
     <List>
      <ListItem>Home</ListItem>
      <ListItem>Fashion</ListItem>
      <ListItem>Men fashion</ListItem>#
      <ListItem>Woman fashion</ListItem>
      <ListItem>My Account</ListItem>
      <ListItem>Order Tracking</ListItem>
      <ListItem>Teams</ListItem>
     </List>
    </Center>
    <Right>
     <Title>Contact</Title>
     <ContactItem><i className="fa-solid fa-location-dot" style={{marginRight: '10px'}}></i>New District Wuse Zone 2, Abuja</ContactItem>
     <ContactItem><i className="fa-solid fa-phone" style={{marginRight: '10px'}}></i>    +-234805500047</ContactItem>
     <ContactItem><i className="fa-regular fa-envelope" style={{marginRight: '10px'}}></i>     Info@ABShop.com
     </ContactItem>
     <Payment src='/images/payment.jpeg' alt='payment' />
    </Right>
   </Container>    
  );
}

export default Footer;