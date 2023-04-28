import React, { useEffect, useMemo, useState } from 'react'
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

export default function Editor({ content, setContent }) {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    }
    return (
        <ReactQuill theme="snow" modules={modules} value={content} onChange={setContent} placeholder="Content goes here..." />
    )
}
