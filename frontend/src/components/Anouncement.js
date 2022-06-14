import React from 'react'
import styled from 'styled-components'

function Anouncement() {
	
	const Container = styled.div`
	font-size: 14px;
	color: white;
	background: teal;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	`
	
  return (
   <Container>
      welcome to ABShop, we have new amazing items
   </Container>    
  );
}

export default Anouncement;