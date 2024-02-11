import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: false
    },
}, { timestamps: true })

export default mongoose.models.blog || mongoose.model('blog', blogSchema)
