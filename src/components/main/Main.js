import styled, { css } from "styled-components";
import Button from "../button/Button";
import Popup from "../popup/Popup";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./main.css";
import Post from "../post/Post";

const Main = styled.article`

  // width: 100vw;
  // display: flex;
  ${(props) =>
    props.opacity &&
    css`
      opacity: ${props.opacity};
    `};
`;

const MainContainer = (props) => {
  const [clicked, seClicked] = useState(false);
  const [cancel, setCancel] = useState(false);
  // const [upvotes, setUpvotes] = useState(0);
  // const [downvotes, setDownvotes] = useState(0);
  const post = useSelector((state) => state.post);

  function clickHandle() {
    seClicked(!clicked);
  }

 
  return (
    <Main>
      <div style={{ display: cancel ? "none" : "block" }}>
        {clicked ? <Popup /> : <></>}
      </div>
      <Button
        height={"50px"}
        width={"140px"}
        backgroundColor={"blue"}
        fontColor={"white"}
        border={"none"}
        borderRadius={"30px"}
        mt={"30px"}
        ml={"30px"}
        hover={"0.7"}
        fontSize={"16px"}
        onClick={clickHandle}
      >
        create post
      </Button>

      <div>
        {post.length >= 1 ? (
          post.map((post, index) => {
            return (
              <Post
                key={index}
                title={post.title}
                img={post.img}
                likes={0}
                dislikes={0}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </Main>
  );
};

export default MainContainer;
