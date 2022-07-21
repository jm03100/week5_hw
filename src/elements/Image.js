import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size } = props;
  const styles = {
    src: src,
    size: size,
  }

  if (shape === "circle") {
    return (
      <ImageCircle {...styles}></ImageCircle>
    )
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    )
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  )
}

Image.defaultProps = {
  shape: "rectangle",
  src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE",
  size: 40,
}

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin-right: 20px; 
`

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`

export default Image;