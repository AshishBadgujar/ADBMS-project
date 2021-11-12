import React, { useState } from 'react';
import baseUrl from '../helpers/baseUrl'
import Main from '../components/layout/main/Main';
import PostPreview from '../components/postPreview/PostPreview';
import Hero from '../components/hero/Hero';
import Axios from 'axios';

const Posts = ({ posts }) => {
  return (
    <Main>
      <Hero />
      <div className="grid">
        {posts.map((post, index) => (
          <PostPreview
            key={post._id}
            id={post._id}
            title={post.title}
            previewText={post.content}
            previewImage={post.mediaUrl || ''}
            lastEdit={post.updatedAt}
            small={true}
          />
        ))}
      </div>
    </Main>
  )
};

export default Posts;

export const getStaticProps = async () => {
  const res = await Axios.get(`${baseUrl}/api/blogs`)
  const posts = res.data

  return {
    props:
      { posts: posts }
  };
};
// export const getServerSideProps = async () => {
//   const res = await Axios.get(`${baseUrl}/api/blogs`)
//   const posts = res.data

//   return {
//     props:
//       { posts: posts }
//   };
// };