import initDB from '../../../helpers/db'
import Comment from '../../../models/Comment'

initDB()

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getComments(req, res)
            break;
        case "PUT":
            await addCommet(req, res)
            break;
        case "DELETE":
            await deleteComment(req, res)
            break;
        default:
            break;
    }
}

const getComments = async (req, res) => {
    const { cid } = req.query
    try {
        var thisComment = await Comment.findOne({ thisBlog: cid })
        if (!thisComment) {
            return res.json(null)
        } else {
            res.json(thisComment.comments)
        }
    } catch (error) {
        console.log(error)
        return res.json({ err: 'error !' })
    }
}

const addCommet = async (req, res) => {
    const { cid } = req.query
    const { name, text } = req.body
    if (!name || !text) {
        return res.json({ err: "Please enter Comment !" })
    }
    try {
        var thisComment = await Comment.findOne({ thisBlog: cid })
        const newComment = {
            commentedBy: name,
            text,
        }
        let allComments = []
        if (!thisComment) {
            allComments = await new Comment({
                thisBlog: cid,
                comments: newComment
            }).save()
        }
        else {
            allComments = await Comment.findOneAndUpdate(
                { _id: thisComment._id },
                { $push: { comments: newComment } }
            )
        }
        res.json(allComments)
    } catch (error) {
        console.log(error)
        res.json({ err: 'comment is not posted,try again !' })
    }
}

const deleteComment = async (req, res) => {
    const { cid } = req.query
    const { commentId } = req.body
    try {
        const thisComment = await Comment.findOneAndUpdate(
            { thisBlog: cid },
            { $pull: { comments: { _id: commentId } } },
            { new: true }
        )
        res.json(thisComment.comments)
    } catch (error) {
        console.log(error)
        return res.json({ err: 'error in deleting comment !' })
    }
}
