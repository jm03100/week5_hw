import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, position, onClick } = props;

  if (position === "bottom") {
    return (
      <Buttons1 text={text} position={position} onClick={onClick}> {text} </Buttons1>
    )
  }

  if (position === "header") {
    return (
      <Buttons2 position={position} onClick={onClick}> {text} </Buttons2>
    )
  }

  if(position === "right") {
    return (
      <FloatButton position={position} onClick={onClick}> {text} </FloatButton>
    )
  }

  if(position === "myheader") {
    return (
      <Buttons3 position={position} onClick={onClick}> {text} </Buttons3>
    )
  }

  return (
    <React.Fragment></React.Fragment>
  )
}

Button.defaultProps = {
  text: "로그인하기",
  position: "bottom",
}

const Buttons1 = styled.button`
    height: 40px;
    margin-top: 20px;
    background-color: black;
    border: none;
    border-radius: 3px;
    color: white;
`

const Buttons2 = styled.button`
    width: 65px;
    height: 28px;
    margin-left: 5px;
    background-color: black;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 13px;
`

const Buttons3 = styled.button`
  width: 20px;
  height: 28px;
  text-align: center;
  border: none;
  background-color: white;
  font-size: 21px;
  margin-right: 9px;
`

const FloatButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  background-color: rgb(27, 156, 252);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 30px;
`

export default Button;