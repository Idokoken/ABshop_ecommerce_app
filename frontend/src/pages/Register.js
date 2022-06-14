import React from 'react'
import styled from 'styled-components'

function Register() {
	
	const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url('/images/gallery2.jpeg'), center;
	display: flex;
	justify-content: center;
	align-items: center;
	`	
	const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	flex-direction: column;
	background: white;
	width: 60%;
	`
	const Title = styled.h2`
	font-size: 30px;
	font-weight: 600;
	`
	const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	`
	const Input =styled.input`
	flex: 1;
	margin: 20px 10px;
	width: 50%;
	padding: 10px;
	`
	const Aggrement = styled.div``
	const Button = styled.button`
	color: white;
	background: teal;
	font-weight: 600;
	padding: 5px;
	margin: 20px 0;
	font-size: 20px;
	border-radius: 10px;
	`

  return (
    <Container>
   <Wrapper>
    <Title>Register</Title>
    <Form>
     <Input placeholder='firstname' />
     <Input placeholder='lastname' />
     <Input placeholder='username' />
     <Input placeholder='email' />
     <Input placeholder='password' />
     <Input placeholder='confirm password' />
     <Aggrement>By creating an account, I consent to processing of my personal data in line with <b>Privacy Policy</b></Aggrement>
     <Button>Submit</Button>
    </Form>
   </Wrapper>    
   </Container>
  );
}

export default Register;