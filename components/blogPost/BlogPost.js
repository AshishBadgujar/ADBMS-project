import React, { useEffect, useState } from 'react';
import Main from '../layout/main/Main';
import utils from '../../utils/';
import blogConfig from '../../blogConfig';
import Image from 'next/image';
import styling from './BlogPost.module.scss';
import baseUrl from '../../helpers/baseUrl';
import Axios from 'axios';
import { useRouter } from 'next/router'

const Post = ({ post }) => {
    const router = useRouter()
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [lastEdit, setLastEdit] = useState('');
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        setLastEdit(utils.formatTimestamp(post.updatedAt));
    }, [post.updatedAt]);

    const deleteBlog = async () => {
        await Axios.delete(`${baseUrl}/api/blog/${post._id}`)
            .then(res => {
                console.log(res.data.message)
                router.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const saveBlog = async (e) => {
        e.preventDefault();
        await Axios.post(`${baseUrl}/api/blog/${post._id}`, {
            id: post._id,
            title,
            content,
        })
            .then(res => {
                alert('your blog successfully updated !')
                router.push(`/`)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <Main title={post.title[blogConfig.locale]}>
            {edit ?
                <form action="" className="form" onSubmit={saveBlog}>
                    <h2>Edit the blog! </h2>
                    <br />
                    <span>Title</span>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <div>
                        <span>Content</span>
                        <textarea name="" id="" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Update</button>
                </form>
                :
                <>
                    <div className={styling.header}>
                        <img
                            src={post.mediaUrl}
                            className={styling.previewImageBackground}
                            alt='preview image background'
                        />
                    </div>
                    <article className={styling.elements}>
                        <Image
                            src={post.mediaUrl}
                            className={styling.previewImage}
                            alt='preview image'
                            width={1000}
                            height={500}
                        />
                        <div className={styling.wrapper}>
                            <h2>{title}</h2>
                            <p>{content}</p>
                            <i className={styling.lastEdit}>Last edit: {lastEdit}</i>
                        </div>
                        <button onClick={() => setEdit(true)}>Edit</button>
                        <button onClick={() => deleteBlog()} style={{ backgroundColor: "#ff4545" }}>Delete</button>
                    </article>
                </>
            }
        </Main>
    );
};

export default Post;