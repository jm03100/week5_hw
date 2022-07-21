import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as deleteActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  const deletePost = (event) => {
    event.stopPropagation();
    dispatch(deleteActions.deletePostFB(props.id));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex padding="10px 20px" bg="#F5F5F5">
          <Grid is_flex width="auto" >
            <Image shape="circle" src={props.src}/>
            <Text margin="13px" bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && <ButtonSt
            onClick={(event) => {
              history.push(`/write/${props.id}`)
              event.stopPropagation();
              }}>수정</ButtonSt>}
            {props.is_me && <ButtonSt onClick={deletePost}>삭제</ButtonSt>}
          </Grid>
        </Grid>

        {props.layout === "right" && (
          <Grid width="auto">       
            <Grid is_flex padding="16px">
              <Grid padding="10px 40px 0px 10px">
                <Text bold>{props.contents}</Text>
              </Grid>
              <Grid>
                <Image half shape="rectangle" src={props.image_url}/>
              </Grid>
            </Grid>
            <Grid padding="16px" bg="#F5F5F5">
              <Text bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
          </Grid>
        )}

        {props.layout === "left" && (
          <Grid width="auto" > 
            <Grid is_flex padding="16px">
              <Grid>
                <Image half shape="rectangle" src={props.image_url}/>
              </Grid>
              <Grid padding="10px 10px 0px 40px">
                <Text bold>{props.contents}</Text>
              </Grid>
            </Grid>
            <Grid padding="16px" bg="#F5F5F5">
              <Text bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
          </Grid>
        )}

        {props.layout === "bottom" && (
          <Grid width="auto">
            <Grid padding="16px">
              <Text bold>{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url}/>
            </Grid>
            <Grid padding="16px" bg="#F5F5F5">
              <Text bold>댓글 {props.comment_cnt}개</Text>
            </Grid>

          </Grid>
        )}
      </Grid>

    </React.Fragment>
  )
}

const ButtonSt = styled.button`
    position: header;
    cursor: pointer;
    box-sizing: border-box;
    background-color: rgb(27, 156, 252);
    border: none;
    border-radius: 3px;
    color: white;
    margin: 0px 10px 0px 0px;
    width: 50px;
    height: 40px;
`

export default Post;