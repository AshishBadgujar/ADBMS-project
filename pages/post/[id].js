import React, { useState } from 'react';
import Axios from 'axios'
import { useRouter } from 'next/router'
import baseUrl from '../../helpers/baseUrl'
import BlogPost from '../../components/blogPost/BlogPost';

const Post = ({ post, comments }) => {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <h3 className="container">Loading...</h3>
        )
    }
    return (
        <BlogPost post={post} comments={comments} />
    )
};

export default Post;

export const getServerSideProps = async ({ params: { id } }) => {
    const res = await Axios.get(`${baseUrl}/api/blog/${id}`)
    const post = res.data
    const res2 = await Axios.get(`${baseUrl}/api/comments/${id}`)
    const comments = res2.data
    return {
        props: {
            post,
            comments
        }
    };
};

