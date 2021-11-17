import React, { useState } from 'react'
import utils from '../../utils/';
import styling from './Comment.module.scss';
import baseUrl from '../../helpers/baseUrl';
import Axios from 'axios';

export default function Comment({ id, comments }) {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [edit, setEdit] = useState(true)
    const [reviews, setReviews] = useState(comments)

    const saveComment = async (e) => {
        setEdit(false)
        e.preventDefault()
        const res = await Axios.put(`${baseUrl}/api/comments/${id}`, {
            name,
            text,
        })
        const res2 = res.data
        console.log(res2)
        if (res2.err) {
            console.log(res2.err)
        } else {
            setReviews(res2.comments)
        }
    }

    function commentComponent(item) {
        return (
            <div>
                <hr />
                <p className={styling.name}>{item.commentedBy}</p>
                <p>{item.text}</p>
                <i className={styling.lastEdit}>{utils.formatTimestamp(item.createdAt)}</i>
            </div>
        )
    }
    return (
        <>
            <h3>Add comment</h3>
            <div className={styling.commentSec} >
                {edit ?
                    <form action="" className={styling.form} onSubmit={saveComment}>
                        <span>Name</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        <div>
                            <span>Comment</span>
                            <textarea name="" id="" cols="30" rows="3" value={text} onChange={(e) => setText(e.target.value)} required></textarea>
                        </div>
                        <button type="submit">Done</button>
                    </form>
                    :
                    <p className={styling.form}>Thanks :)</p>
                }
                <div className={styling.allComments}>
                    {reviews.map(item => commentComponent(item))}
                </div>
            </div>
        </>
    )
}

