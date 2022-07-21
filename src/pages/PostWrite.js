import React, { useState } from "react";
import styled from "styled-components";
import Upload from "../shared/Upload";
import { Grid, Text, Button, Image, Input } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
  const {history} = props;
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;
  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [contents, setContents] = useState(_post ? _post.contents : "");
  const [layout, setLayout] = useState(_post ? _post.layout : "bottom");

  React.useEffect(() => {
    if(is_edit && !_post) {
      window.alert("포스트 정보가 없습니다!");
      console.log("포스트 정보가 없습니다!");
      history.goBack();
    }

    if(is_edit) {
      dispatch(imageActions.setPreview(_post.image_url))
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value)
  };

  const addPost = () => {
    if(contents === "") {
      window.alert("게시글 내용을 작성해주세요.")
      return;
    }
    dispatch(postActions.addPostFB(contents, layout));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, {contents: contents, layout}))
  };

  const layoutCheck = (e) => {
    if (e.target.checked) {
      setLayout(e.target.value);
    }
    console.log(e.target.value);
  }

  if(!is_login) {
    return (
      <React.Fragment>
        <Grid margin="70px"/>
        <Grid padding="16px" center>
          <Text size="16px">로그인 후에 글을 쓸 수 있습니다</Text>
          <ButtonSt>
          <Button position="bottom" text="로그인 하러가기" onClick={() => {history.replace("/login")}} />
          </ButtonSt>
        </Grid>
      </React.Fragment>
    )
  };

  return (
    <React.Fragment>
      <Grid margin="60px"/>
      <Grid padding="16px 16px 0px 16px">
        <Text margin="30px 0px" size="25px" bold>
          {is_edit ? "게시글 수정" : "게시글 작성"}
        </Text>
        <Upload/>
      </Grid>
      <Grid padding="0px 16px">
        <Text size="20px" bold>
          레이아웃 선택
        </Text>
      </Grid>

      <Grid is_flex padding="16px">
        <Grid padding="0px 0px 10px 0px">
          <input
            type="radio"
            name="layout"
            value="right"
            id="right"
            onChange={layoutCheck}
          />
          <strong >오른쪽에 이미지 왼쪽에 텍스트</strong>
        </Grid>
        <Grid padding="0px 0px 10px 0px">
          <Image
            half
            shape="rectangle"
            src={ preview ? preview : "http://via.placeholder.com/400x300"}
          />
        </Grid>
      </Grid>

       <Grid is_flex padding="16px">
          <Grid padding="0px 0px 10px 0px">
            <Image
              half
              shape="rectangle"
              src={ preview ? preview : "http://via.placeholder.com/400x300"}
            />
          </Grid>
          <Grid padding="0px 0px 10px 0px">
            <input
              type="radio"
              name="layout"
              value="left"
              id="left"
              style={{float: "right"}}
              onChange={layoutCheck}
            />
            <strong style={{float: "right"}}>왼쪽에 이미지 오른쪽에 텍스트</strong>
          </Grid>
        </Grid>
      
      <Grid padding="0px 16px">
          <Grid padding="0px">
            <Grid padding="0px 0px 10px 0px">
              <input
                type="radio"
                name="layout"
                value="bottom"
                id="bottom"
                onChange={layoutCheck}
              />
              <strong>하단에 이미지 상단에 텍스트</strong>
            </Grid>
          </Grid>

          <Grid padding="0px 0px 10px 0px">
            <Image
              half
              shape="rectangle"
              src={ preview ? preview : "http://via.placeholder.com/400x300"}
            />
          </Grid>
        </Grid>
        
      <Grid padding="0px 16px">
        <Input 
          value={contents}
          write="write"
          label="게시글 내용"
          placeholder="내용을 입력하세요."
          onChange={changeContents}/>
      </Grid>
      <Grid padding="0px 16px">
        <ButtonSt>
          {is_edit ? (<Button position="bottom" text="게시글 수정" onClick={editPost}/>) :
         (<Button position="bottom" text="게시글 작성" onClick={addPost}/>)
         }
        </ButtonSt>
      </Grid>
    </React.Fragment>
  )
}

const ButtonSt = styled.div`
  display: flex;
  flex-direction: column;

  Button {
    position: header;
    cursor: pointer;
    box-sizing: border-box;
    background-color: rgb(27, 156, 252);
    border: none;
    border-radius: 3px;
    color: white;
  }

`
export default PostWrite;