import React, {useEffect, useState} from 'react';
import {AppWrapper, GlobalStyle} from "../src/styles/styles";
import {getAllPosts} from "../src/api/api";
import PostsList from "../src/components/PostList/PostsList";
import {IPost} from "../src/components/PostList/Post";

interface IState {
    posts: IPost[]
}

const Summary = () => {
    const [state, setState] = useState<IState>({
        posts: []
    })

    useEffect(() => {
        getAllPosts().then((data) => setState({posts: data.posts}))
    }, [])

    return (
        <>
            <GlobalStyle/>
            <AppWrapper>
                <h1>Summary page</h1>
                <PostsList posts={state.posts}></PostsList>
            </AppWrapper>
        </>
    );
};

export default Summary;