import React from 'react'
import styled from 'styled-components'
//import {popularNewsLetter} from './data'
import {mobile} from '../Responsive'

function NewsLetter() {
	
	const Container = styled.div`
	display: flex;	
	justify-content: center;
	align-items: center;
	padding: 20px;
	flex-direction: column;
	background-color: #DEE6E8;
	${mobile({height: '40vh', padding: '0', margin: '0'})}
	`
	const Title = styled.h2`
	${mobile({padding: '0', margin: '0'})}
	`
	const Description = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin: 10px;
	${mobile({fontSize: '16px'})}
	`
	const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	text-align: center;
	${mobile({display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px'})}
	`
	const Input = styled.input`
	padding: 5px;
	`
	const Button = styled.button`
	padding: 5px;
	background: teal;
	color: white;
	${mobile({width: '100%', marginTop: '10px'})}
	`
	 
  return (    
    
   <Container>
     <Title>NewsLetter</Title>
     <Description>Get update about your favourite products</Description>
     <InputContainer>
       <Input type='email' placeholder='enter email' />
       <Button>Send</Button>
     </InputContainer>
   </Container>    
   
  );
}

export default NewsLetter;