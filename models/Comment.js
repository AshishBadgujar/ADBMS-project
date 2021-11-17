import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const commentSchema = new mongoose.Schema({
    thisBlog: {
        type: ObjectId,
        ref: 'blog'
    },
    comments: [
        {
            commentedBy: { type: String, required: true },
            text: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ]
})

export default mongoose.models.comment || mongoose.model('comment', commentSchema)