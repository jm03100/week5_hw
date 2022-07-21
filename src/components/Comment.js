import React from "react";
import styled from "styled-components";
import { Grid, Image, Button, Text } from "../elements";

const Comment = (props) => {
  return (
    <React.Fragment>
      <Grid width="auto" margin="0px 16px" bg="#F5F5F5">
        <Grid width="auto" is_flex padding="20px 20px">
          <Image shape="circle" src={props.src}/>
          <Input style={{width: "1000px"}} type="text"></Input>
          <Buttons>추가</Buttons>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const Input = styled.input`
    width: 100%;
    min-width: 230px;
    box-sizing: border-box;
    padding: 10px;
    border: 2px solid rgb(37, 204, 247);
    border-radius: 3px;
    margin-bottom: 20px;
`

const Buttons = styled.div`
    cursor: pointer;
    box-sizing: border-box;
    background-color: rgb(27, 156, 252);
    border: none;
    border-radius: 3px;
    color: white;
    width: 50px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Comment;