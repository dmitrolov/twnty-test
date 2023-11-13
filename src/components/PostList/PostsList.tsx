import React from 'react';
import styled from "styled-components";
import {IPost, Post} from "./Post";


const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PostsList = ({posts}) => {
    console.log(posts)
    return (
        <PostsWrapper>
            {posts.map((post: IPost) => {
                return <Post post={post}/>
            })}
        </PostsWrapper>
    );
};

export default PostsList;