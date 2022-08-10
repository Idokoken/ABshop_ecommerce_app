import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";

function Login() {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.4)
      ),
      url("/images/gallery2.jpeg"), center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-direction: column;
    background: white;
    width: 60%;
    ${mobile({ width: "80%" })}
  `;
  const Title = styled.h2`
    font-size: 30px;
    font-weight: 600;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const Input = styled.input`
    flex: 1;
    margin: 20px 10px;
    width: 100%;
    padding: 10px;
  `;
  const Btn = styled.div`
    align-self: start;
    margin: 5px 0;
  `;
  const Button = styled.button`
    color: white;
    background: teal;
    font-weight: 600;
    padding: 5px;
    margin: 20px 0;
    font-size: 20px;
    border-radius: 10px;
  `;

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>Submit</Button>
        </Form>
        <Btn>
          {" "}
          <NavLink style={{ textDecoration: "none" }} to="/reset">
            Forgot password
          </NavLink>
        </Btn>
        <Btn>
          if you dont have an account,{" "}
          <b>
            <em>
              <NavLink
                style={{
                  textDecoration: "none",
                  alignSelf: "start",
                  margin: "20px",
                }}
                to="/register"
              >
                Register here
              </NavLink>
            </em>
          </b>
        </Btn>
      </Wrapper>
    </Container>
  );
}

export default Login;
