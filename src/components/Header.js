import React from "react";
import styled from "styled-components";
import { Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";

const Header = (props) => {
  const login = useSelector((state) => state.user.is_login);
  const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const session = sessionStorage.getItem(session_key) ? true : false;
  const dispatch = useDispatch();

  if(login && session){
    return(
      <React.Fragment>
      <Headers>
        <div>
          <Text size="30px" onClick={() => {
              history.push('/')
            }}>Home</Text>
        </div>
        <div>
          <Button text="알림" onClick={() => {history.push("/noti")}}/>
          <Button text="로그아웃" onClick={() => {dispatch(userAction.logoutFB())}}/>
        </div>
      </Headers>
    </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Headers>
        <div>
          <Text size="30px" onClick={() => {
              history.push('/')
            }}>HOME</Text>
        </div>
        <div>
          <Button text="로그인" onClick={() => {
              history.push('/login')
            }}
          />
          <Button text="회원가입" onClick={() => {
              history.push('/signup')
            }}
          />
        </div>
      </Headers>
    </React.Fragment>
  )
}

const Headers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 5px solid skyblue;

  Button {
    position: header;
    cursor: pointer;
    box-sizing: border-box;
    background-color: rgb(27, 156, 252);
    border: none;
    border-radius: 3px;
    color: white;
    margin: 0px 10px 0px 0px;
  }
`

export default Header;