import React from "react";
import styled from "styled-components";

export interface IPost {
    id: number,
    title: string,
    body: string,
    reactions: number,
    tags: string[],
    userIde: number
}

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`

export const Post = ({post}) => {
    console.log(post)
    return (
        <PostWrapper>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
        </PostWrapper>
    );
}