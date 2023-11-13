interface IPostsRequest {
    limit: number;
    posts: any;
    skip: number;
    total: number;
}

export const getAllPosts = async (): Promise<IPostsRequest> => {
    const res = await fetch('https://dummyjson.com/posts');
    return await res.json();
}