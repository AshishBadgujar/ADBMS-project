import React, { useEffect, useState } from 'react';
import Main from '../layout/main/Main';
import utils from '../../utils/';
import blogConfig from '../../blogConfig';
import Image from 'next/image';
import styling from './BlogPost.module.scss';
import baseUrl from '../../helpers/baseUrl';
import Axios from 'axios';
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';
import Comment from '../comment/Comment';

const Post = ({ post, comments }) => {
    const router = useRouter()
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [lastEdit, setLastEdit] = useState('');
    const [edit, setEdit] = useState(false)

    const notify = (type, text) => {
        if (type == 1) {
            toast.success(text)
        }
        else {
            toast.error(text)
        }
    };

    useEffect(() => {
        setLastEdit(utils.formatTimestamp(post.updatedAt));
    }, [post.updatedAt]);

    const deleteBlog = async () => {
        if (confirm('Are you sure want to delete?')) {
            await Axios.delete(`${baseUrl}/api/blog/${post._id}`)
                .then(res => {
                    router.push('/')
                    notify(1, res.data.message)
                })
                .catch(err => {
                    notify(0, err)
                })
        } else {
            return
        }
    }

    const saveBlog = async (e) => {
        setEdit(false)
        e.preventDefault();
        await Axios.post(`${baseUrl}/api/blog/${post._id}`, {
            id: post._id,
            title,
            content,
        })
            .then(res => {
                notify(1, 'Blog successfully updated :)')
            }).catch(err => {
                notify(0, err)
            })
    }

    return (
        <Main title={post.title[blogConfig.locale]}>
            <Toaster />
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
                            <div className={styling.flex}>
                                <i className={styling.lastEdit}>- {post.author}</i>
                                <i className={styling.lastEdit}>{lastEdit}</i>
                            </div>
                        </div>
                        <button onClick={() => setEdit(true)}>Edit</button>
                        <button onClick={() => deleteBlog()} style={{ backgroundColor: "#ff4545" }}>Delete</button>
                        <hr />
                        <br />
                        <Comment id={post._id} comments={comments} />
                    </article>
                </>
            }
        </Main>
    );
};

export default Post;